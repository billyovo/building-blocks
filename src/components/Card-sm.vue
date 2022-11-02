<script>

</script>
<template>
    <div class="card">
        <div class="card-inner">
            <div><slot></slot></div>
        </div>
    </div>
</template>

<style scoped>
    .card{
        background: white;
        width: 230px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 10px;
    }
    .card-inner{
        padding: 15px;
    }
</style>