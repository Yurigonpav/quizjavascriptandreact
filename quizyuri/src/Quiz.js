import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Quiz.css';

const questions = [
    {
        question: 'Qual é a linguagem de programação padrão para desenvolvimento web?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        correctAnswer: 'JavaScript',
      },
      {
        question: 'O que é o DOM em JavaScript?',
        options: ['Documento de Objeto Móvel', 'Data Object Model', 'Documento de Objeto Manipulador', 'Modelo de Objeto de Documento'],
        correctAnswer: 'Modelo de Objeto de Documento',
      },
      {
        question: 'Qual é o propósito da função `map` em JavaScript?',
        options: ['Iterar sobre os elementos de um array e modificar cada elemento', 'Adicionar um elemento ao final de um array', 'Remover um elemento específico de um array', 'Inverter a ordem dos elementos em um array'],
        correctAnswer: 'Iterar sobre os elementos de um array e modificar cada elemento',
      },
      {
        question: 'O que significa o termo "closure" em JavaScript?',
        options: ['Uma função que não tem acesso ao escopo externo', 'Um tipo de erro em JavaScript', 'Uma função que tem acesso ao escopo externo, mesmo após a sua execução', 'Um método para fechar o navegador'],
        correctAnswer: 'Uma função que tem acesso ao escopo externo, mesmo após a sua execução',
      },
      {
        question: 'Como você verifica o tipo de uma variável em JavaScript?',
        options: ['typeof', 'typeOf', 'variableType', 'checkType'],
        correctAnswer: 'typeof',
      },
      {
        question: 'O que é JSON em JavaScript?',
        options: ['JavaScript Object Notation - Uma notação para objetos em JavaScript', 'Uma função incorporada para ordenar objetos', 'Um método para criar arrays em JavaScript', 'Um formato de arquivo de imagem'],
        correctAnswer: 'JavaScripnpm install react-transition-groupt Object Notation - Uma notação para objetos em JavaScript',
      },
      {
        question: 'Qual é a diferença entre "let", "const" e "var" em JavaScript?',
        options: ['Não há diferença, são sinônimos', '"let" e "const" são formas mais antigas de declarar variáveis', '"let" e "const" são utilizados para variáveis locais, enquanto "var" é para variáveis globais', '"var" não é mais utilizado em JavaScript'],
        correctAnswer: '"let" e "const" são utilizados para variáveis locais, enquanto "var" é para variáveis globais',
      },
      {
        question: 'O que é o evento "DOMContentLoaded" em JavaScript?',
        options: ['Um evento acionado quando a página é completamente carregada', 'Um evento acionado quando um elemento do DOM é modificado', 'Um evento acionado quando o conteúdo externo é carregado', 'Um evento acionado quando o botão direito do mouse é clicado'],
        correctAnswer: 'Um evento acionado quando a página é completamente carregada',
      },
      {
        question: 'Qual é a função do método "bind" em JavaScript?',
        options: ['Associar uma função a um elemento HTML', 'Conectar dois objetos em uma associação bidirecional', 'Vincular uma função a um determinado contexto, criando uma nova função', 'Criar uma cópia exata de um objeto'],
        correctAnswer: 'Vincular uma função a um determinado contexto, criando uma nova função',
      },
      {
        question: 'O que é AJAX em JavaScript?',
        options: ['Uma linguagem de programação', 'Uma técnica para criar animações em páginas da web', 'Uma abordagem assíncrona para fazer solicitações HTTP no navegador', 'Uma biblioteca para manipulação de arrays'],
        correctAnswer: 'Uma abordagem assíncrona para fazer solicitações HTTP no navegador',
      },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <TransitionGroup>
        <CSSTransition
          key={currentQuestion}
          timeout={300}
          classNames="question"
        >
          <div className="question-section">
            <h2>Pergunta {currentQuestion + 1} de {questions.length}</h2>
            <p>{questions[currentQuestion].question}</p>
            <div className="answer-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>

      {showScore && (
        <div className="score-section">
          <h2>Você acertou {score} de {questions.length} perguntas</h2>
          <button onClick={resetQuiz}>Tentar novamente</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
