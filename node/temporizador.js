const shedule = require('node-schedule');

const tarefa1 = shedule.scheduleJob('*/5 * 12 * * 6', function () {
  console.log('Executar Tarefa 1!', new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log('Cancelado Tarefa 1!');
}, 20000);

const regra = new shedule.RecurrenceRule();
regra.dayOfWeek = [new shedule.Range(1, 6)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = shedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2!', new Date().getSeconds());
});
