const Submit = () => {
    let FloatingInput = document.getElementById('floatingInput').value 
    let Floating = document.getElementById('floatingInput-one').value 
    if (FloatingInput == ''|| Floating == '') {
        danger.style.display = 'flex'
        setTimeout(() => {
            danger.style.display='none'
   },5000)
        }
        else if (FloatingInput == 'donellahandy6@gmail.com' && Floating == 'Donella20909'){
            window.location.href = 'dashboard.html'

        }
        else{
            last.style.display = 'flex'
        setTimeout(() => {
            last.style.display='none'
   },5000)
        }
     document.getElementById('floatingInput').value = ''
     document.getElementById('floatingInput-one').value = ''



}

const data = [

    {
        date: "Sept, 5 2023",
        history: [
            {
                time:  "9:59am",
                card: "MasterCard",
                action: "(...5483)",
                amount: "100.00",
                status: "Completed"
            },
            {
                time:  "7:37am",
                card: "Funds",
                action: "",
                amount: "210,393,288.00",
                status: "Completed"
            },
            {
                time:  "5:27am",
                card: "Funds",
                action: "",
                amount: "120,000,900.00",
                status: "Completed"
            },
            
        ]
    },
    {
        date: "Aug 5 2023",
        history: [
            {
                time:  "6:42pm",
                card: "Funds",
                action: "",
                amount: "10,393,288.00",
                status: "Completed"
            },
            {
                time:  "7:27am",
                card: "MasterCard",
                action: "(...5483)",
                amount: "100.00",
                status: "Completed"
            },
            {
                time:  "2:17am",
                card: "Funds",
                action: "",
                amount: "420,309,000.00",
                status: "Completed"
            },
            
        ]
    },
]

document.getElementById('History').innerHTML = data.map(entry => `
<div style="border-bottom: 1px solid #172a3a " >
<p style=" margin-top: 20px;">${entry.date}</p>
${entry.history.map(item => `
    <div style=" display: flex; align-items: center; padding:  15px 0; justify-content: space-between; width: 100%; border-top: 1px solid #172a3a;  ">
        <div style=" display:  flex; align-items: center; gap: 10px;">
            <p>${item.time}</p>
            <div> 
                <p>${item.card}</p>
                ${item.action}
            </div>
        </div>
        <div style="text-align: end;">
            <p>$${item.amount}</p>
            <p>${item.status}</p>
        </div>
    </div>

`).join('')}
</div>`).join('');


const fund = ()=>{
    document.getElementById("load")
     load.style.display='block'
    setTimeout(() => {
        load.style.display='none'
        document.getElementById("modal").style.display = 'flex'
},5000)
}

const closed =() =>{
    document.getElementById("modal").style.display = 'none'
}