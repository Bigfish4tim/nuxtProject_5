<template>
    <div>
        <h2>Sub-Category : ID</h2>
        <p>
            ID : {{ id }}
        </p>
        <p>
            hello : {{ hello }}
        </p>
    </div>
</template>
<script>
export default {
    asyncData({params, query}) {
        console.log(params)
        console.log(query)
        return {
            id: params.id,
            hello: query.hello
        }
    },
    validate({params}) {
        return /^\d+$/.test(params.id);
    }
}
</script>
<style>
    
</style>