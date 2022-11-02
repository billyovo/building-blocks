<template>
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-title">
                <slot name="title"></slot>
            </div> 
        </div>
        <div class="overlay-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
    .overlay-container{
        background: white;
        width: 230px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 10px;
    }
    .overlay{
        width: 100%;
        height: 100px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-image: url('../assets/stock.jpg');
        display: flex;
    }
    .overlay-title{
        background: rgba(0,0,0,0.4);
        color: white;
        width: 100%;
        align-self: flex-end;
        display: flex;
        justify-content: center;
        font-size: 1.15rem;
    }
    .overlay-content{
        padding: 10px;
    }
</style>
