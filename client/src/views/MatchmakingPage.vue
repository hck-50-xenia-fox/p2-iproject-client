<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { queuePostFlushCb, ref } from 'vue';
import { useUserStore } from '../stores/user';


export default {
    name: 'Matchmaking',
    computed: {
        ...mapState(useUserStore, ['questionsData']),
        quizComplete : false,
        currentQuestion : ''

    },
    methods: {
        ...mapActions(useUserStore, ['showQuestion']),
        currentQuestionValue() {
          let questions = ref(this.questionsData)
          currentQuestion = ref(0)

          return currentQuestion
        },
        score() {
            let value = 0
            questions.value.map(q => {
                if (q.answer === q.selected) {
                    console.log('correct')
                    value++
                }
            })

            return value
        },

        getCurrentQuestion() {
            let question = this.questionsData.value[currentQuestionValue().value]
            question.index = currentQuestionValue().value
            return question
        },

        setAnswer (e) {
            this.questionsData.value[currentQuestionValue().value].selected = e.target.value
            e.target.value = null
        },
        
        NextQuestion () {
            if (currentQuestionValue().value < this.questionsData.value.length -1) {
                currentQuestionValue().value++
                return
            }

            quizComplete.value = true
        }

    },
    created() {
        this.showQuestion()
    }

}
</script>

<template>
  <main class="app">
    <h1>Pokemon Quiz</h1>
    <pre>{{ questionsData }}</pre>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.description }}</span>
        <span class="score">Score {{ score }}/{{ questionsData.length }}</span>
      </div>
      <!-- getCurrentQuestionya. ... masih bentuk object, belum bisa di looping -->
      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion" 
          :for="'option' + index"
          :class="`option ${
            getCurrentQuestion == index
              ? index == getCurrentQuestion
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion != null && index != getCurrentQuestion
              ? 'disabled'
              : ''
          }`"
        >
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion"
            :value="index"
            v-model="getCurrentQuestion"
            :disabled="getCurrentQuestion"
            @change="SetAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>

      <button @click="NextQuestion" :disabled="!getCurrentQuestion">
        {{
          getCurrentQuestion == questions.length - 1
            ? "Finish"
            : getCurrentQuestion == null
            ? "Select an option"
            : "Next question"
        }}
      </button>
    </section>

    <section v-else>
      <h2>You have finished the pokemon quiz!</h2>
      <p>Your score is {{ score }}/{{ questions.length }}</p>
    </section>
  </main>
</template>
