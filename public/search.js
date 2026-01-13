async function searchAccount() {
    const accountNo = document.getElementById("searchAccount").value;
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "Searching...";

    try {
        const res = await fetch(`/account/${accountNo}`);
        const data = await res.json();

        if (!res.ok) {
            resultDiv.innerHTML = `<p style="color:red;">${data.message}</p>`;
            return;
        }

        resultDiv.innerHTML = `
            <h3>Account Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Bank:</strong> ${data.bankName}</p>
            <p><strong>Account No:</strong> ${data.accountNo}</p>
            <p><strong>ATM No:</strong> ${data.atmNo}</p>
            <p><strong>CVC:</strong> ${data.cvcNo}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching data</p>`;
    }
}
