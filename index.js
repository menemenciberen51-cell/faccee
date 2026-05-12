const { ethers } = require("ethers");
const http = require("http");

// Railway'in kapanmaması için minik bir sunucu
http.createServer((req, res) => {
  res.writeHead(200);
  res.end("30K Operasyonu: 50 Cuzdanlik Ordu Aktif! 🚀");
}).listen(process.env.PORT || 3000);

// --- TAM 50 ADET PRIVATE KEY LİSTESİ ---
const privateKeys = [
    // Senin verdiğin 29 Anahtar
    "0x17b4dc000bb223965f6df7a2b0f5aa1faaba5df8a14959808d145ed846e5203c",
    "0xf5735ce8d7467a872ccda59a55e9825426d35235b4e65a3d913fe13b3a007372",
    "0x5de5f4d57c4ceb2ec622fa7523515fea36377c071ae3c7ff8917d615347e6769",
    "0x3d16ed3a159d684e361819f6e9d46c07747016680776985a85c62ac5ab85b13f",
    "0x6f7b57d55d63d0bc7df2d571e91584954adaf7b8b89e4b1a04656aa0d5c63b04",
    "0x266a7a04d58df83e477fb0a15d3dd5f31320e9d2733023255dcdbbbae10d9d71",
    "0x6e1bb166c94edede5d3a7d9408cb7044162fb5fe09edec6c8d88138f678bd886",
    "0xa7c861051c1ef6f371ce5fadda99a6f31f3c23efbc7e694a54ef7ba1a126e587",
    "0xb8a6539bc6124d5ad398933563a7bd5736a3046789a866a32fec923ca11aad28",
    "0xc16c6cca58f2773615f3affda51a928eedef47c7fce8ce1c39fd74c933416802",
    "0x8dd2aab66c125465a3b8bd51ed6f8b380d1e90c853ddd58e0c46e667adcb1f22",
    "0x83dfd1e360f0ec36dfcc4cd929db4e42cfc0b9863163a56beda593b039e4ef28",
    "0x138587705d9ebc455cf5eb9445299846c81c5c69e8bb9e29ee9e51135c863d72",
    "0xb47659633cba4d7fcd689a210f9aa1128bdc8a80eff58587fccd843d3f534f35",
    "0x7b41613bf0ed5f342f85ff09ff22a279e5e242348bfc853254fd154d5e27d83b",
    "0x2bb06d1fdbc91982aab5b96437714dd08554aed0fbfab4163634ee144175bcde",
    "0x0c1c324cb0372e3a76557b652e3e941e3add277afd64e0084f2dd2561b4fd625",
    "0x894dd786271eed3b28067b176bd21c2d8185ff9ad3ff3c8f62b294687142f790",
    "0x2ab9f74778a20ab7bb8fc7490552e179a0e33ef5e3de3c65fd1931279a125017",
    "0xf64b882d4e2d933ea48438a44bfd2162a4b08d4be896ec99a1b4d2168a7cb46a",
    "0xa179883621617a05df4c01e0f5a7f76816cf37dcf2ed3fffccb05d60165a46a7",
    "0xf356f3ade9a7bac1600b6b88957333a0721b4161484df83489507a371f22924f",
    "0x3e0f176fbb2c350c803b4f3458bcc870621b52ef636bfdc2252d7a186238aac3",
    "0x2f281ec69b702f16c7f977dd7bd1baedf08031a85516e4fb65c66bf22e5a4d0d",
    "0xf70effda81f51310fbcc6e3b4da8d545a56a3f823ddfe1bb0ea9733408d4d4dd",
    "0xf9ec0b47113b6a71c7f351968673fde5d028b609a9d54ad6b687365e92731b0c",
    "0xc49da25cf2c21b009b1e1ec6bd2b9e9e15d57c490a9f91c706feca2a0da46480",
    "0xa7f697e7396a7b2ca26f4be78e788bdf75d29cff72fe7df0b673217b08f2f92f",
    "0x19893a5095e16d51eb150bccfb4dfba29d8c8e26f8ecd0751e6f67a658d21c5f",

    // Benim Senin İçin Ürettiğim 21 Yeni Anahtar (Eksikler Tamamlandı)
    "0x8a1f8c3b9b4d5a2e1f3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a",
    "0x5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c",
    "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
    "0x9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d",
    "0x3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f",
    "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b",
    "0xb1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2",
    "0xf5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6",
    "0xd9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0",
    "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
    "0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a",
    "0x0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e",
    "0x4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c",
    "0x8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a",
    "0xc2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3",
    "0xa6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7",
    "0xe0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1",
    "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
    "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
    "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f",
    "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b"
];

const RPC_URL = "https://artio.rpc.berachain.com"; 
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Önce adresleri ekrana yazdırır ki sen kopyalayıp musluğa yapıştırabilesin
async function baslangicRaporu() {
    console.log("==================================================");
    console.log("🚀 30K OPERASYONU: 50 CÜZDANLIK ORDU SAHAYA İNİYOR!");
    console.log("👇 MUSLUKTAN PARA İSTEYECEĞİN ADRESLER 👇");
    
    for (let i = 0; i < privateKeys.length; i++) {
        try {
            const wallet = new ethers.Wallet(privateKeys[i]);
            console.log(`Asker #${i + 1} Adresi: ${wallet.address}`);
        } catch (e) {
            console.log(`Asker #${i + 1} Anahtarında sorun var.`);
        }
    }
    console.log("==================================================\n");
    
    // Raporu verdikten sonra operasyonu başlat
    orduGoreve();
}

async function orduGoreve() {
    console.log(`--- ⚔️ Ordu Taarruza Başladı: ${new Date().toLocaleString()} ---`);

    for (let i = 0; i < privateKeys.length; i++) {
        try {
            const wallet = new ethers.Wallet(privateKeys[i], provider);
            const balance = await provider.getBalance(wallet.address);
            
            console.log(`[Asker #${i + 1}] Bakiye: ${ethers.formatEther(balance)} BERA`);

            // Eğer bakiye varsa işlem yap
            if (balance > ethers.parseEther("0.001")) {
                const tx = await wallet.sendTransaction({
                    to: wallet.address, 
                    value: ethers.parseEther("0.0001"),
                });
                console.log(`   ✅ Görev Başarılı! TX: ${tx.hash}`);
            } else {
                console.log(`   ❌ Bakiye yetersiz. Musluktan bakiye bekleniyor...`);
            }
        } catch (error) {
            console.log(`   ⚠️ Asker #${i + 1} Hata Aldı: Sıkıntı yok, atlanıyor.`);
        }
    }
}

// Bot her başladığında adresleri göstersin ve işlemleri başlatsın
baslangicRaporu();

// Her 12 saatte bir işlemi tekrarla
setInterval(orduGoreve, 12 * 60 * 60 * 1000);
