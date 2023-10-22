<script  >
import { defineComponent, toRefs } from 'vue'
export default defineComponent( {
    props:{
        titulo: String
    }
    , 
    setup(props, {emit}){
        const {titulo} = toRefs(props);
        
        const emitEvent=()=>{
            emit('customEvent', titulo.value + ' - Enviando dados a partir do filho')
        }
        return {titulo, emitEvent}

    }
})


</script>

<template>
    <div>
       <h1> {{titulo}}</h1>
       <button @click="emitEvent"> Clique </button>
    </div>
</template>