<template>
    <div>
        <h1>User</h1>
        <p>
            User ID : {{ id }}
        </p>
        <p>
            Hello : {{ hello }}
        </p>
    </div>
</template>
<script>
export default {
    asyncData({params, query}) {
        console.log(params)
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