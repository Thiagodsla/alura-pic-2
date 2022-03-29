import Vue from 'vue';

Vue.directive('my-transform',{
   bind(el, binding){
      // console.log('Diretiva criada.')
      // console.log(el)
      let current = 0;
      let scale = false

      el.addEventListener('click', function(){

         let increment = binding.value || 90;
         let effect = `rotate(${current}deg)`;

         // define o modificador rotate ou reverse para girar para ambos os lados
         if(!binding.arg || binding.arg == 'rotate'){ // se o argumento for rotate ou reverse ele gira.

            if(binding.modifiers.reverse){ // o reverse so vale para o modificador rotate
               current -= increment;
            }else{
               current += increment;
            }
            effect = `rotate(${current}deg)`;

         }else if(binding.arg == "scale"){ // se o argumento for scale amplia
            
            if(scale == false){
               effect = `scale(${increment})`;
               scale = true
            }else{
               effect = 'scale(1)';
               scale = false
            }

         }
         
         
         el.style.transform = effect;

         // modificador animate na diretiva
         if(binding.modifiers.animate){
            el.style.transition = 'transform 5s'
         }
         
      })
   }
});