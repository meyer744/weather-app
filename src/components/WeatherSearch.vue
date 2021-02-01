<template>
<div class="weather-search">
    <div>
    <input
    placeholder="search by city or zip" v-model.number="input" 
    @keyup.enter="sendWeatherSearch">
    </div>
    <button @click="sendWeatherSearch"><font-awesome-icon class="icon-search" icon="search" /></button>
</div>
</template>

<script>
export default {
    emits: ['weatherSearchInput'],
    data() {
        return {
            input: null
        };
    },
    methods:{
        sendWeatherSearch() {
            this.$emit('weatherSearchInput', this.input);
        }
    }
}
</script>

<style scoped>
.weather-search{
    display: flex;
    justify-content: center;
}
input {
    background-color: transparent;
    border-style: solid;
    border-color: white;
    color: white;
    font-size: 15px;
    border-radius: 4px;
    outline: none;
    box-shadow:inset 0 0 5px 5px rgba(236, 232, 232, 0.247);
    padding: 10px;
}

button {
    background-color: transparent;
    border-style: solid;
    border-color: white;
    border-radius: 4px;
    padding: 10px;
    outline: none;
    width: 4em;
    margin-left: 6px;
}

button:hover {
    transition: all .2s ease-in-out;
    transform: scale(1.1);
}

.icon-search {
    color: white;
    font-size: 16px;
} 

::placeholder{
    color: white;
}
</style>