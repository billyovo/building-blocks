<script>
    export default{
        props:{
            color:{
                type: String,
                default: '#007BFF'
            },
            size:{
                type: String,
                default: "medium",
                validator(value) {
                  return ['large', 'medium', 'small'].includes(value)
                }
            },
        },
        computed:{
            floatingButtonClasses(){
                return{
                    'floating-button-sm': this.size === 'small',
                    'floating-button-md': this.size === 'medium',
                    'floating-button-lg': this.size === 'large',
                }
                
            }
        }
    }
</script>

<template>
    <button :class="[floatingButtonClasses, 'floating-button']" :style="`background-color: ${color}`">
        <div class="floating-button-inner">
            <slot></slot>
        </div>
        
    </button>
</template>

<style scoped>
    .floating-button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }
    .floating-button-sm{
        height: 30px;
        width: 30px;
        font-size: 0.5rem;
    }
    .floating-button-md{
        height: 50px;
        width: 50px;
        font-size: 1.5rem;
    }
    .floating-button-lg{
        height: 70px;
        width: 70px;
        font-size: 2.5rem;
    }
    .floating-button-inner{
        color: white;
        font-size: inherit;
    }
</style>