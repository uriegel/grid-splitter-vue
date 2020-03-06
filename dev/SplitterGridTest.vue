<template>
    <div class="root">
        <splitter-grid :isVertical=true :isSecondInvisible="isHidden" @splitter-position-changed="viewerHeightChanged">
            <template v-slot:first>
                <splitter-grid>
                    <template v-slot:first>
                        <div class="left">
                            <p>
                                <button @click="onHide">Verbergen</button>
                            </p>
                        </div>
                    </template>
                    <template v-slot:second>
                        <div class="right"></div>
                    </template>
                </splitter-grid>
            </template>
            <template v-slot:second>
                <div class="lower"></div>
            </template>
        </splitter-grid>
    </div>
</template>

<script>
import Vue from 'vue'
import SplitterGrid from '../SplitterGrid.vue'

export default Vue.extend({
    data() {
        return {
            isHidden: false
        }
    },
    components: {
        SplitterGrid
    },
    methods: {
        onHide() {
            this.isHidden = !this.isHidden
        },
        viewerHeightChanged() {
            console.log("new viewer height")
        }
    }
})
</script>

<style>
body {
    height: 100vh;
    margin: 0px;
    padding: 0px;
}

</style>
<style scoped>
.root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.upper {
    background-color: chartreuse;
    flex-grow: 1;
}
.lower {
    background-color: blueviolet;
    flex-grow: 1;
}
.left {
    background-color: yellow;
    flex-grow: 1;
}
.right {
    background-color: red;
    flex-grow: 1;
}
</style>
