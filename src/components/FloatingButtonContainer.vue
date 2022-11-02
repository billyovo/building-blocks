<template>
    <div class="floating-button-container">
        <div class="floating-button-container-inner">
            <slot></slot>
        </div>   
    </div>
</template>

<style scoped>
    .floating-button-container{
        display: fixed;
        right: 0;
        bottom: 0;
        width: 50px;
    }
    .floating-button-container-inner{
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 10px;
    }
</style>