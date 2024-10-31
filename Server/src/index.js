app.get('/', (req, res)=>{
    res.send("Backend of the application");   
});

app.listen(4000, ()=>{
    console.log("Server running on port", 4000)
})