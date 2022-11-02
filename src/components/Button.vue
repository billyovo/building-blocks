<script>
    export default{
        props:{
            color:{
                type: String,
                default: '#007BFF'
            },
            outlined:{
                type: Boolean,
                default: false
            },
            size:{
                type: String,
                default: "medium",
                validator(value) {
                  return ['large', 'medium', 'small'].includes(value)
                }
            },
            text:{
                type: Boolean,
                default: false
            }
        },
        computed:{
            buttonClasses(){
                return{
                    'button-sm': this.size === 'small',
                    'button-md': this.size === 'medium',
                    'button-lg': this.size === 'large',
                }
            },
            buttonStyles(){
                return{
                    'background-color': (this.outlined || this.text) ? 'transparent' : this.color,
                    'color': (this.outlined || this.text) ? this.color : 'white',
                    'border': this.outlined ? `${this.color} 1px solid` : 'none',
                }
            },
        }
    }
</script>

<template>
    <button :class="[buttonClasses, 'button-base']" :style="buttonStyles">
        <slot></slot>
    </button>
</template>
<style scoped>
    .button-sm{
        padding: 6px 8px;
        font-size: 0.8rem;
    } 
    .button-md{
        padding: 8px 15px;
        font-size: 1rem;
    }

    .button-lg{
        padding: 15px 20px;
        font-size: 1.3rem;
    }
    .button-base{
        cursor: pointer;
        border-radius: 5px;
    }
    .button-base:hover{
        animation: highlight 1.5s;
    }
    @keyframes highlight{
        from{
            opacity: 0.8;
        }
        to{
            opacity: 1;
        }
    }
</style>