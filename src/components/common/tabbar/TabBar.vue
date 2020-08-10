<template>
    <div>
        <div id="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TabBar'
};
</script>
<style scoped>
#tab-bar {
    display: flex;
    background-color: #eee;
    color: #000;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.02);
    z-index: 8;
}
</style>
