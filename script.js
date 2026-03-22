 document.getElementsByidName("AdmissionForm").addEventListten
        er("submit",function){
            e.prevenDefault();
        
     
        let name = 
        document.getElementById("A").value.trim();

        let Email = 
        document.getElementById("B").value.trim();

        let Phone = 
        document.getElementById("C").value.trim();

        let Date = 
        document.getElementById("D").value.trim();

        let Course = 
        document.getElementById("E").value.trim();

        let Address = 
        document.getElementById("E").value.trim();
        if(name === "" || email === "" || phone === "" || course === "" || address === ""){
        alert("⚠ Please fill all fields!");
        return;
        }
    }


    alert('continue')

    </script>