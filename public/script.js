document.getElementById("myForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("username").value,
        bankName: document.getElementById("bankName").value,
        accountNo: document.getElementById("accountNo").value,
        atmNo: document.getElementById("atmNo").value,
        cvcNo: document.getElementById("cvcNo").value
    };

    const res = await fetch("/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);
});

function goToSearch() {
    window.location.href = "search.html";
}
