const { ethers } = require("ethers");

async function createArmy() {
    console.log("🚀 30K OPERASYONU: CÜZDAN ORDUSU OLUŞTURULUYOR...\n");
    
    let army = [];

    for (let i = 1; i <= 50; i++) {
        // Rastgele yeni bir cüzdan oluşturur
        const wallet = ethers.Wallet.createRandom();
        
        const walletData = {
            id: i,
            address: wallet.address,
            privateKey: wallet.privateKey
        };

        army.push(walletData);

        console.log(`✅ Cüzdan #${i} Hazır!`);
        console.log(`📍 Adres: ${wallet.address}`);
        console.log(`🔑 Private Key: ${wallet.privateKey}`);
        console.log("------------------------------------------");
    }

    console.log("\n🔥 ORDU KURULDU! Bu bilgileri kopyala ve GÜVENLİ BİR YERE kaydet.");
    console.log("⚠️ Private Key'leri kaybedersen paralara asla ulaşamazsın!");
}

createArmy();
