export const gradeInfo = {
  "1-sinif": {
    title: "1. Sınıf Dersleri",
    subtitle: "Temel mühendislik, matematik ve programlama dersleri.",
  },
  "2-sinif": {
    title: "2. Sınıf Dersleri",
    subtitle: "Bilgisayar mimarisi, mantık devreleri ve temel CS dersleri.",
  },
  "3-sinif": {
    title: "3. Sınıf Dersleri",
    subtitle: "Ağlar, veritabanı, işletim sistemi, yapay zeka ve yazılım dersleri.",
  },
  "gelecek-donem": {
    title: "Gelecek Dönem",
    subtitle: "Önümüzdeki dönem alınacak dersler.",
  },
};

export const courses = [
  {
    id: "ayrik-yapilar",
    grade: "1-sinif",
    name: "Ayrık Yapılar",
    icon: "🧩",
    description: "Kümeler, mantık, bağıntılar, fonksiyonlar ve ayrık matematik temelleri.",
    status: "available",
    weeks: [],
  },
  {
    id: "programlama-1-2",
    grade: "1-sinif",
    name: "Programlama 1-2",
    icon: "💻",
    description: "C dili temelleri, algoritma mantığı, döngüler, diziler ve fonksiyonlar.",
    status: "available",
    weeks: [],
  },
  {
    id: "lineer-cebir",
    grade: "1-sinif",
    name: "Lineer Cebir",
    icon: "📐",
    description: "Matrisler, determinant, vektör uzayları ve lineer denklem sistemleri.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Lineer Cebir Ders Notları",
        summary: "Lineer cebir dersine ait temel hafta notları ve genel kaynaklar.",
        topics: ["Matrisler", "Vektörler", "Lineer denklem sistemleri", "Haftalık ders notları"],
        pdfs: [
          {
            title: "Lineer Cebir 1. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir 1. Hafta Ders Notu.pdf",
          },
          {
            title: "Lineer Cebir 1 ve 2 Hafta",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir 1 ve 2 hafta .pdf",
          },
          {
            title: "Lineer Cebir 1, 2 ve 3 Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir 1,2ve3 hafta ders notu.pdf",
          },
          {
            title: "Lineer Cebir 4. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir 4.hafta Ders Notu .pdf",
          },
          {
            title: "Lineer Cebir 5. Hafta",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir 5.Hafta.pdf",
          },
          {
            title: "Lineer Cebir 7. Hafta",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir 7.hafta.pdf",
          },
          {
            title: "Lineer Cebir Genel Not",
            type: "PDF",
            file: "/pdf/Lineer Cebir/Lineer Cebir.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "temel-elektrik",
    grade: "1-sinif",
    name: "Temel Elektrik",
    icon: "⚡",
    description: "Devre elemanları, Ohm kanunu, akım, gerilim ve temel elektrik kavramları.",
    status: "available",
    weeks: [],
  },

  {
    id: "sayisal-yontemler",
    grade: "2-sinif",
    name: "Sayısal Yöntemler",
    icon: "📊",
    description: "Sayısal çözümleme, hata analizi, kök bulma ve nümerik yöntemler.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Sayısal Yöntemler Ders Notu",
        summary: "Sayısal yöntemler dersine ait genel ders notu.",
        topics: ["Hata analizi", "Nümerik yöntemler", "Kök bulma", "Yaklaşık çözümler"],
        pdfs: [
          {
            title: "Sayısal Yöntemler Ders Notu",
            type: "PDF",
            file: "/pdf/sayisal-yontemler/sayisal-yontemler-ders-notu.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "mikro-bilgisayar",
    grade: "2-sinif",
    name: "Mikro Bilgisayar",
    icon: "🔌",
    description: "Mikroişlemci mimarisi, assembly temelleri ve düşük seviye sistemler.",
    status: "available",
    weeks: [],
  },
  {
    id: "bilgisayar-mimarisi",
    grade: "2-sinif",
    name: "Bilgisayar Mimarisi",
    icon: "🖥️",
    description: "CPU, bellek, komut setleri, veri yolu ve bilgisayar organizasyonu.",
    status: "available",
    weeks: [],
  },
  {
    id: "mantik-devre-ve-tasarimi",
    grade: "2-sinif",
    name: "Mantık Devre ve Tasarımı",
    icon: "🔲",
    description: "Boolean cebri, kapılar, Karnaugh haritaları, MUX, DEMUX ve devre tasarımı.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Mantık Devre Temelleri",
        summary: "Analog-sayısal sistemler ve ilk hafta mantık devre konuları.",
        topics: ["Analog sistemler", "Sayısal sistemler", "Mantık devreleri"],
        pdfs: [
          {
            title: "Hafta 1 - Chapter 1",
            type: "PPT",
            file: "/pdf/Mantık Devre Tasarımı/Hafta_1_ch 1.ppt",
          },
          {
            title: "Mantık Devreleri Tasarımı Not 1",
            type: "PDF",
            file: "/pdf/Mantık Devre Tasarımı/MantıkDevreleriTasarımı_Not1_Analog ve Sayısal Sistemler.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Mantık Devreleri Devam",
        summary: "İkinci ve üçüncü hafta ders materyalleri.",
        topics: ["Mantık kapıları", "Devre tasarımı", "IO konuları"],
        pdfs: [
          {
            title: "Hafta 2 - Chapter 2",
            type: "PPT",
            file: "/pdf/Mantık Devre Tasarımı/Hafta_2_ch 2.ppt",
          },
          {
            title: "Hafta 3 - Chapter 3 Encrypt",
            type: "PDF",
            file: "/pdf/Mantık Devre Tasarımı/Hafta_3_ch 3_encrypt.pdf",
          },
          {
            title: "Mantık Devreleri 3. Hafta IO",
            type: "PDF",
            file: "/pdf/Mantık Devre Tasarımı/mantık devreleri 3_hafta IO.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "bicimsel-diller-ve-ozdevinirler",
    grade: "2-sinif",
    name: "Biçimsel Diller ve Özdevinirler",
    icon: "🔤",
    description: "DFA, NFA, regex, gramerler ve biçimsel dil teorisi.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Biçimsel Diller ve Özdevinirler",
        summary: "Biçimsel diller, otomata teorisi ve özdevinirler için temel ders materyalleri.",
        topics: ["DFA", "NFA", "Regex", "Gramerler", "Biçimsel diller"],
        pdfs: [
          {
            title: "Biçimsel Diller",
            type: "PDF",
            file: "/pdf/bicimsel-diller-ve-ozdevinirler/bicimsel-diller.pdf",
          },
          {
            title: "Erhan Akkaya Biçimsel Diller ve Özdevinirler",
            type: "PDF",
            file: "/pdf/bicimsel-diller-ve-ozdevinirler/erhan-akkaya-bicimsel-diller-ve-ozdeviniler.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "programlama-dilleri",
    grade: "2-sinif",
    name: "Programlama Dilleri",
    icon: "🧠",
    description: "Programlama paradigmaları, dil yapıları ve sözdizimsel kavramlar.",
    status: "available",
    weeks: [],
  },
  {
    id: "olasilik",
    grade: "2-sinif",
    name: "Olasılık",
    icon: "🎲",
    description: "Olasılık kuralları, rassal değişkenler, dağılımlar ve istatistik temelleri.",
    status: "available",
    weeks: [],
  },
  {
    id: "veri-organizasyonu",
    grade: "2-sinif",
    name: "Veri Organizasyonu",
    icon: "🗂️",
    description: "Dosya yapıları, indeksleme, sıralama ve veri saklama organizasyonları.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Veri Organizasyonuna Giriş",
        summary: "Veri organizasyonu dersine ait giriş ve modelleme konuları.",
        topics: ["Veri organizasyonu", "Kavramsal modelleme", "ER modeli"],
        pdfs: [
          {
            title: "L02 - Giriş",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L02-Giriş.pdf",
          },
          {
            title: "L03 - Kavramsal Modelleme ve ER Modeli",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L03-Kavramsal Modelleme ve ER Modeli.pdf",
          },
          {
            title: "L04 - ER Model 2",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L04-ER Model-2.pdf",
          },
          {
            title: "L04 - ER Model 2 Ek",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L04-ER Model-2 (1).pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Veri Modelleri ve İlişkisel Model",
        summary: "Mantıksal veri modelleri, ilişkisel veri modeli ve normal formlar.",
        topics: ["Mantıksal veri modelleri", "İlişkisel model", "Normal formlar", "UML"],
        pdfs: [
          {
            title: "L06 - Mantıksal Veri Modelleri 2",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L06-Mantıksal Veri Modelleri-2.pdf",
          },
          {
            title: "L07 - İlişkisel Veri Modeli",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L07- İlişkisel Veri Modeli, Veri Bağımlılığı ve Bütünlüğü.pdf",
          },
          {
            title: "L08 - Relational Model Normal Formlar",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L08- Relational Model - Normal Formlar.pdf",
          },
          {
            title: "L09 - UML",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L09-UML(Unified Modeling Language).pdf",
          },
        ],
      },
      {
        week: 3,
        title: "Fiziksel Veri Modelleri",
        summary: "B+ Tree, hashing ve fiziksel veri saklama yapıları.",
        topics: ["Fiziksel veri modelleri", "B+ Tree", "Hashing"],
        pdfs: [
          {
            title: "L10 - Fiziksel Veri Modelleri",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L10- Fiziksel Veri Modelleri (B+ Tree)  .pdf",
          },
          {
            title: "L11 - B+ Tree & Hashing",
            type: "PDF",
            file: "/pdf/Veri orgabizasyonu/L11- B+ Tree & Hashing .pdf",
          },
        ],
      },
    ],
  },

  {
    id: "bilgisayar-aglari",
    grade: "3-sinif",
    name: "Bilgisayar Ağları",
    icon: "🌐",
    description: "TCP/IP, DNS, HTTP, yönlendirme, alt ağlar ve ağ katmanları.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Bilgisayar Ağları ve İnternet",
        summary: "Bilgisayar ağlarının temel yapısı, internet mimarisi ve ağ protokolleri incelenir.",
        topics: ["Ağlara giriş", "İnternet yapısı", "Protokoller", "Paket anahtarlama"],
        pdfs: [
          {
            title: "Bilgisayar Ağları ve İnternet - Ders Notları",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/01-Bilgisayar Ağları ve İnternet (Ders Notları).pdf",
          },
          {
            title: "Bilgisayar Ağları ve İnternet",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/01-Bilgisayar Ağları ve İnternet.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Uygulama Katmanı",
        summary: "HTTP, DNS ve uygulama katmanı protokolleri incelenir.",
        topics: ["Uygulama katmanı", "HTTP", "DNS", "İstemci-sunucu yapısı"],
        pdfs: [
          {
            title: "Uygulama Katmanı - Ders Notları",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/02-Uygulama Katmanı (ders notları).pdf",
          },
          {
            title: "Uygulama Katmanı - PDF Slayt",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/02-Uygulama Katmanı (pdf slayt).pdf",
          },
        ],
      },
      {
        week: 3,
        title: "CRC ve Hata Denetimi",
        summary: "Veri iletiminde hata tespiti için CRC yöntemi incelenir.",
        topics: ["CRC", "Hata denetimi", "Bit işlemleri", "Veri iletimi"],
        pdfs: [
          {
            title: "CRC",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/03-CRC.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "Yönlendirme ve Distance Vector",
        summary: "Ağlarda yönlendirme mantığı ve Distance Vector algoritması incelenir.",
        topics: ["Yönlendirme", "Distance Vector", "Yönlendirme tabloları"],
        pdfs: [
          {
            title: "Distance Vector",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/distanceVector.pdf",
          },
        ],
      },
      {
        week: 5,
        title: "TCP Güvenliği ve TLS",
        summary: "TCP güvenliği ve TLS entegrasyonu konusu incelenir.",
        topics: ["TCP", "TLS", "Güvenli iletişim", "Şifreleme"],
        pdfs: [
          {
            title: "TCP Güvenliği ve TLS Entegrasyonu",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/TCP Güvenliği ve TLS Entegrasyonu (okuma).pdf",
          },
        ],
      },
      {
        week: 6,
        title: "Kaynak Kitap",
        summary: "Bilgisayar ağları için temel kaynak kitap.",
        topics: ["Computer Networking", "Top-Down Approach", "Ağ katmanları"],
        pdfs: [
          {
            title: "Computer Networking - A Top-Down Approach 8th Edition",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/computer-networking-a-top-down-approach-8th-edition.pdf",
          },
        ],
      },
      {
        week: 7,
        title: "Vize ve Final Çalışmaları",
        summary: "Sınavlara hazırlık için vize, final ve çalışma soruları.",
        topics: ["Vize", "Final", "Çalışma soruları", "Sınav hazırlığı"],
        pdfs: [
          {
            title: "2024-2025 Network Vize",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/2425NetworkVize.pdf",
          },
          {
            title: "2024-2025 Network Final",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/2425NetworkFinal.pdf",
          },
          {
            title: "Çalışma Soruları",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/ÇalışmaSoruları.pdf",
          },
          {
            title: "Çalışma Soruları 2",
            type: "PDF",
            file: "/pdf/Bilgisayar Ağları/ÇalışmaSoruları2.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "mobil-cihazlara-uygulama-gelistirme",
    grade: "3-sinif",
    name: "Mobil Cihazlara Uygulama Geliştirme",
    icon: "📱",
    description: "Android, Kotlin, RecyclerView, SQLite, Firebase ve mobil uygulama geliştirme.",
    status: "available",
    weeks: [],
  },
  {
    id: "veri-tabani-yonetim-sistemi",
    grade: "3-sinif",
    name: "Veri Tabanı Yönetim Sistemi",
    icon: "🗄️",
    description: "SQL, PostgreSQL, ER diyagramı, view, trigger, function ve ilişkisel veritabanı.",
    status: "available",
    weeks: [],
  },
  {
    id: "isletim-sistemi",
    grade: "3-sinif",
    name: "İşletim Sistemi",
    icon: "⚙️",
    description: "Süreçler, bellek yönetimi, senkronizasyon, kilitlenme ve dosya sistemleri.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "İşletim Sistemlerine Giriş",
        summary: "İşletim sistemi kavramları, süreçler ve temel sistem bileşenleri.",
        topics: ["İşletim sistemi", "Süreçler", "İş parçacıkları", "Senkronizasyon"],
        pdfs: [
          {
            title: "3. Sınıf Güz Dönemi İşletim Sistemleri",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/3.sınıf_GuzDonemi_IsletimSistemleri.pdf",
          },
          {
            title: "DERS2 - İşletim Sistemlerine Genel Bakış",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS2-İşletim Sistemlerine Genel Bakış2.pdf",
          },
          {
            title: "DERS3 - İşlemler",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS3-İşlemler.pdf",
          },
          {
            title: "DERS4 - İş Parçacıkları",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS4-İş Parçacıkları.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Senkronizasyon ve Kilitlenmeler",
        summary: "İşlem senkronizasyonu, CPU zamanlama ve kilitlenme konuları.",
        topics: ["Senkronizasyon", "CPU zamanlama", "Kilitlenmeler", "Monitörler"],
        pdfs: [
          {
            title: "DERS6 - İşlem Senkronizasyonu",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS6-İşlem Senkronizasyonu1.pdf",
          },
          {
            title: "DERS7 - CPU Zamanlama Algoritmaları",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS7-CPU Zamanlama Algoritmaları Örnek Soru Üzerinde Karşılaştırma.pdf",
          },
          {
            title: "DERS8 - Kilitlenmeler",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS8-Kilitlenmeler.pdf",
          },
          {
            title: "DERS10 - Monitörler",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS10-Monitörler.pdf",
          },
          {
            title: "DERS12 - Dosya Sistem Gerçekleştirilmesi",
            type: "PDF",
            file: "/pdf/ısletim-sistemleri/DERS12-Dosya Sistem Gerçekleştirilmesi.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "sinyaller-ve-sistemler",
    grade: "3-sinif",
    name: "Sinyaller ve Sistemler",
    icon: "📈",
    description: "Sinyal türleri, sistem özellikleri, enerji, güç ve dönüşüm kavramları.",
    status: "available",
    weeks: [],
  },
  {
    id: "internet-programciligi",
    grade: "3-sinif",
    name: "İnternet Programcılığı",
    icon: "🕸️",
    description: "HTML, CSS, JavaScript, Node.js, Express.js ve web programlama temelleri.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "HTML ve CSS",
        summary: "HTML ve CSS final notları.",
        topics: ["HTML", "CSS", "Web sayfası yapısı", "Stil düzenleme"],
        pdfs: [
          {
            title: "HTML Final Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/html-final-notu.pdf",
          },
          {
            title: "CSS Final Ders Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/css-final-ders-notu.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "JavaScript",
        summary: "JavaScript giriş ve kod yapısı ders notları.",
        topics: ["JavaScript", "Değişkenler", "Fonksiyonlar", "Kod yapısı"],
        pdfs: [
          {
            title: "JavaScript Giriş Final Ders Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/javascript-giris-final-ders-notu.pdf",
          },
          {
            title: "JavaScript Kod Yapısı Ders Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/javascript-kod-yapisi-ders-notu.pdf",
          },
        ],
      },
      {
        week: 3,
        title: "Node.js, React ve Bootstrap",
        summary: "Modern web geliştirme için Node.js, React ve Bootstrap notları.",
        topics: ["Node.js", "React", "Bootstrap", "Frontend", "Backend"],
        pdfs: [
          {
            title: "Node.js Final Ders Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/nodejs-final-ders-notu.pdf",
          },
          {
            title: "React Final Ders Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/react-final-ders-notu.pdf",
          },
          {
            title: "Bootstrap Final Ders Notu",
            type: "PDF",
            file: "/pdf/internet-programciligi/bootstrap-final-ders-notu.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "algoritma-analizi",
    grade: "3-sinif",
    name: "Algoritma Analizi",
    icon: "🧮",
    description: "Zaman karmaşıklığı, Big-O, arama, sıralama ve algoritma tasarım teknikleri.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Efektif Algoritma Analizinin Temelleri",
        summary: "Algoritma analizi, verimlilik, çalışma zamanı ve temel analiz kavramları incelenir.",
        topics: ["Algoritma analizi", "Verimlilik", "Çalışma zamanı", "Temel kavramlar"],
        pdfs: [
          {
            title: "Efektif Algoritma Analizinin Temelleri",
            type: "PDF",
            file: "/pdf/algoritma-analizi/01-Efektif Algoritma Analizinin Temelleri.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Asimptotik Analiz",
        summary: "Big-O, Big-Theta ve Big-Omega gösterimleriyle algoritmaların büyüme davranışı incelenir.",
        topics: ["Big-O", "Big-Theta", "Big-Omega", "Zaman karmaşıklığı"],
        pdfs: [
          {
            title: "Asimptotik Analiz",
            type: "PDF",
            file: "/pdf/algoritma-analizi/02-Asimptotik Analiz.pdf",
          },
        ],
      },
      {
        week: 3,
        title: "Özyinelemeli ve Özyinelemesiz Algoritmalar",
        summary: "Recursive ve iterative algoritma yaklaşımları ile analiz yöntemleri incelenir.",
        topics: ["Özyineleme", "Recursive algoritmalar", "Iterative algoritmalar"],
        pdfs: [
          {
            title: "Özyinelemeli ve Özyinelemesiz Algoritmaların Çözümü",
            type: "PDF",
            file: "/pdf/algoritma-analizi/03-Özyinelemeli ve Özyinelemesiz Algoritmaların Çözümü.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "Hashing",
        summary: "Hash tabloları, hash fonksiyonları ve çakışma çözümleme yöntemleri incelenir.",
        topics: ["Hashing", "Hash tabloları", "Çakışma", "Arama işlemleri"],
        pdfs: [
          {
            title: "Hashing 01",
            type: "PDF",
            file: "/pdf/algoritma-analizi/05-Hashing 01.pdf",
          },
          {
            title: "Hashing 01 Ek Dosya",
            type: "PDF",
            file: "/pdf/algoritma-analizi/05-Hashing 01 (1).pdf",
          },
        ],
      },
      {
        week: 5,
        title: "Dinamik Programlama",
        summary: "Alt problemlere ayırma, memoization ve dinamik programlama yaklaşımı incelenir.",
        topics: ["Dinamik programlama", "Memoization", "Alt problemler", "Optimizasyon"],
        pdfs: [
          {
            title: "Dinamik Programlama 1",
            type: "PDF",
            file: "/pdf/algoritma-analizi/07-Dinamik Programlama 1.pdf",
          },
        ],
      },
      {
        week: 6,
        title: "Genel Ders Notu ve Sınavlar",
        summary: "Genel ders notu, vize ve final çalışma dosyaları.",
        topics: ["Genel not", "Vize", "Final", "Sınav hazırlığı"],
        pdfs: [
          {
            title: "Algoritma Analizi Ders Notu",
            type: "PDF",
            file: "/pdf/algoritma-analizi/Algoritma Analizi-Ders Notu.pdf",
          },
          {
            title: "2024-2025 Final - CA",
            type: "PDF",
            file: "/pdf/algoritma-analizi/2425Final - CA (1).pdf",
          },
          {
            title: "2024-2025 Vize Soru Cevap",
            type: "PDF",
            file: "/pdf/algoritma-analizi/2425VizeSoruCevap (1).pdf",
          },
        ],
      },
    ],
  },
  {
    id: "goruntu-isleme",
    grade: "3-sinif",
    name: "Görüntü İşleme",
    icon: "🖼️",
    description: "Filtreleme, kenar bulma, histogram, eşikleme ve görüntü analiz yöntemleri.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Görüntü İşleme Ders Notu",
        summary: "Görüntü işleme dersi için genel ders notu.",
        topics: ["Filtreleme", "Kenar bulma", "Histogram", "Eşikleme", "Görüntü analizi"],
        pdfs: [
          {
            title: "Ders Notu",
            type: "PDF",
            file: "/pdf/goruntu-isleme/Ders Notu.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "nesne-yonelik-yazilim-muh",
    grade: "3-sinif",
    name: "Nesne Yönelik Yazılım Müh.",
    icon: "🏗️",
    description: "OOP, UML, SOLID prensipleri, tasarım kalıpları ve yazılım mimarisi.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Nesne Yönelik Programlama",
        summary: "Nesne tabanlı programlama ve haftalık ders materyalleri.",
        topics: ["OOP", "Class", "Object", "UML", "Java"],
        pdfs: [
          {
            title: "Nesne Tabanlı Programlama",
            type: "PDF",
            file: "/pdf/Nesne Yönelik Programlama/NesneTabanliProgramlama.pdf",
          },
          {
            title: "Hafta 2",
            type: "PPTX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_2.pptx",
          },
          {
            title: "Hafta 3",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_3.docx",
          },
          {
            title: "Hafta 4",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_4.docx",
          },
          {
            title: "Hafta 4.1",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_4.1.docx",
          },
          {
            title: "Hafta 4.2",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_4.2.docx",
          },
          {
            title: "Hafta 5",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_5.docx",
          },
          {
            title: "Hafta 5.1",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta_5.1.docx",
          },
          {
            title: "Hafta 5.2 Object Oriented Software Engineering",
            type: "DOCX",
            file: "/pdf/Nesne Yönelik Programlama/hafta 5.2 object-oriented-software-engineering-practical-software-development-using-uml-and-java-2005 - Kopya.docx",
          },
        ],
      },
    ],
  },
  {
    id: "yapay-zeka",
    grade: "3-sinif",
    name: "Yapay Zeka",
    icon: "🤖",
    description: "Arama algoritmaları, bilgi temsili, makine öğrenmesi ve yapay zeka temelleri.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Yapay Zeka Ders Notu",
        summary: "Yapay zeka dersi için genel kapsamlı ders notu.",
        topics: ["Yapay zeka", "Arama algoritmaları", "Bilgi temsili", "Makine öğrenmesi"],
        pdfs: [
          {
            title: "Yapay Zeka Ders Notu",
            type: "PDF",
            file: "/pdf/yapay-zeka/Yapay-zeka- Ders Notu (1).pdf",
          },
        ],
      },
    ],
  },

  {
    id: "veri-yapilari",
    grade: "gelecek-donem",
    name: "Veri Yapıları",
    icon: "🌳",
    description: "Liste, yığın, kuyruk, ağaç, graf ve temel veri yapıları.",
    status: "available",
    weeks: [
      {
        week: 2,
        title: "Veri Yapıları — 2. Hafta",
        summary: "İkinci haftaya ait veri yapıları ders notu.",
        topics: [],
        pdfs: [
          {
            title: "Veri Yapıları — 2. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Veri Yapıları/Veri Yapıları - 2. hafta Ders Notu.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "Veri Yapıları — 4. Hafta",
        summary: "Bağlı listelere giriş konusunu içeren dördüncü hafta ders notu.",
        topics: ["Bağlı listeler", "Düğümler", "İşaretçiler"],
        pdfs: [
          {
            title: "Linked Liste Giriş — 4. Hafta",
            type: "PDF",
            file: "/pdf/Veri Yapıları/Linked Liste Giriş-4.hafta.pdf",
          },
        ],
      },
      {
        week: 6,
        title: "Veri Yapıları — 6. Hafta",
        summary: "Bağlı listeler üzerinde ekleme, silme ve gezinme işlemlerini içeren altıncı hafta ders notu.",
        topics: ["Bağlı listeler", "Ekleme", "Silme", "Liste üzerinde gezinme"],
        pdfs: [
          {
            title: "Linked List ve Linked List Üzerinde İşlemler — 6. Hafta",
            type: "PDF",
            file: "/pdf/Veri Yapıları/Linked List ve Linked List üzerinde İşlemler-6.hafta ders Notu.pdf",
          },
        ],
      },
      {
        week: 7,
        title: "Veri Yapıları — 7. Hafta",
        summary: "Öz yinelemeli algoritmalar, bağlı liste ve yığın işlemleri ile M-Way ağaçlarına girişi içeren yedinci hafta ders notları.",
        topics: ["Öz yinelemeli algoritmalar", "Bağlı liste işlemleri", "Yığın veri yapısı", "M-Way ağaçları"],
        pdfs: [
          {
            title: "Öz Yinelemeli Algoritmalar, Bağlı Liste İşlemleri ve Yığın Veri Yapısı — 7. Hafta",
            type: "PDF",
            file: "/pdf/veri-yapilari/oz-yinelemeli-bagli-liste-yigin-7-hafta.pdf",
          },
          {
            title: "M-Way Ağaçlarına Giriş — 7. Hafta",
            type: "PDF",
            file: "/pdf/veri-yapilari/m-way-agaclarina-giris-7-hafta.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "veri-madenciligi",
    grade: "gelecek-donem",
    name: "Veri Madenciliği",
    icon: "⛏️",
    description: "Veriden bilgi çıkarımı, sınıflandırma, kümeleme ve örüntü keşfi.",
    status: "available",
    weeks: [
      {
        week: "Vize",
        title: "Veri Madenciliği — Vize Çalışmaları",
        summary: "Hesaplamalı vize soruları ve ayrıntılı çözümlerini içeren çalışma dosyaları.",
        topics: ["Hesaplamalı sorular", "Sınıflandırma", "Kümeleme", "Çözümlü örnekler"],
        pdfs: [
          {
            title: "Veri Madenciliği — Hesaplamalı Soru Kitapçığı",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/veri_madenciligi_hesaplamali_soru_kitapcigi.pdf",
          },
          {
            title: "Veri Madenciliği — Çözümlü Cevap Anahtarı",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/veri_madenciligi_cozumlu_cevap_anahtari.pdf",
          },
        ],
      },
      {
        week: 1,
        title: "Veri Madenciliği — 1. Hafta",
        summary: "Veri madenciliğine giriş konularını içeren birinci hafta ders notu.",
        topics: ["Veri madenciliğine giriş", "Temel kavramlar"],
        pdfs: [
          {
            title: "Veri Madenciliğine Giriş — 1. Hafta",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/Veri Madenciliğine Giriş-1.hafta.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Veri Madenciliği — 2. Hafta",
        summary: "Veri ön işlemenin ilk bölümünü içeren ikinci hafta ders notu.",
        topics: ["Veri ön işleme", "Veri temizleme"],
        pdfs: [
          {
            title: "Veri Ön İşleme I — 2. Hafta",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/Veri On Isleme-I 2. hafta.pdf",
          },
        ],
      },
      {
        week: 3,
        title: "Veri Madenciliği — 3. Hafta",
        summary: "Veri ön işlemenin ikinci bölümünü içeren üçüncü hafta ders notu.",
        topics: ["Veri ön işleme", "Veri dönüştürme"],
        pdfs: [
          {
            title: "Veri Ön İşleme II — 3. Hafta",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/Veri On İşleme-II 3. hafta.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "Veri Madenciliği — 4. Hafta",
        summary: "Sınıflandırma ve karar ağaçlarını içeren dördüncü hafta ders notu.",
        topics: ["Sınıflandırma", "Karar ağaçları"],
        pdfs: [
          {
            title: "Sınıflandırma ve Karar Ağaçları — 4. Hafta",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/Sınıflandırma Karar ağaçları-4.hafta.pdf",
          },
        ],
      },
      {
        week: 5,
        title: "Veri Madenciliği — 5. Hafta",
        summary: "CART, Twoing, Gini ve KNN ağırlıklı oylama konularını içeren beşinci hafta ders notu.",
        topics: ["CART", "Twoing", "Gini", "KNN", "Ağırlıklı oylama"],
        pdfs: [
          {
            title: "CART, Twoing, Gini ve KNN Ağırlıklı Oylama — 5. Hafta",
            type: "PDF",
            file: "/pdf/Veri Madenciliği/Cart Twoing Gini ve KNN Ağırlık oylama-5.hafta .pdf",
          },
        ],
      },
      {
        week: 7,
        title: "Veri Madenciliği — 7. Hafta",
        summary: "Kümeleme yöntemlerini içeren yedinci hafta ders notu.",
        topics: ["Kümeleme", "Benzerlik ölçüleri", "Küme analizi"],
        pdfs: [
          {
            title: "Kümeleme — 7. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/veri-madenciligi/kumeleme-7-hafta.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "kontrol-teorisi",
    grade: "gelecek-donem",
    name: "Kontrol Teorisi",
    icon: "🎛️",
    description: "Kontrol sistemleri, geri besleme, kararlılık ve sistem cevabı.",
    status: "available",
    weeks: [
      {
        week: "Vize",
        title: "Kontrol Teorisi — Vize Ders Notu",
        summary: "Kontrol teorisi vize sınavına hazırlık için kapsamlı ders notu.",
        topics: ["Kontrol sistemleri", "Geri besleme", "Kararlılık", "Vize hazırlığı"],
        pdfs: [
          {
            title: "Kontrol Teorisi — Vize Ders Notu",
            type: "PDF",
            file: "/pdf/Kontrol Teorisi/kontrol-teorisi-vize-ders-notu.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "bilgisayar-muh-gelismeler",
    grade: "gelecek-donem",
    name: "Bilgisayar Müh. Gelişmeler",
    icon: "🚀",
    description: "Bilgisayar mühendisliğindeki güncel teknolojiler ve gelişmeler.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "Bilgisayar Mühendisliğinde Gelişmeler — 1. Hafta",
        summary: "Birinci haftaya ait ders notu.",
        topics: [],
        pdfs: [
          {
            title: "Bilgisayar Mühendisliğinde Gelişmeler — 1. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Bilgisayar Mühendisliğinde Gelişmeler/Bilgisayar Mühendisliğinde Gelişme 1.Hafta-ders Notu.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Bilgisayar Mühendisliğinde Gelişmeler — 2. Hafta",
        summary: "İkinci haftaya ait ders notu.",
        topics: [],
        pdfs: [
          {
            title: "Bilgisayar Mühendisliğinde Gelişmeler — 2. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Bilgisayar Mühendisliğinde Gelişmeler/Bilgisayar Mühendisliğinde Gelişme 2. Hafta Ders Notu.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "Bilgisayar Mühendisliğinde Gelişmeler — 4. Hafta",
        summary: "Dördüncü haftaya ait ders notu.",
        topics: [],
        pdfs: [
          {
            title: "Bilgisayar Mühendisliğinde Gelişmeler — 4. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Bilgisayar Mühendisliğinde Gelişmeler/Bilgisayar Mühendisliğinde Gelişme-4.hafta Ders Notu.pdf",
          },
        ],
      },
      {
        week: 7,
        title: "Bilgisayar Mühendisliğinde Gelişmeler — 7. Hafta",
        summary: "Kuantum hesaplamanın matematiksel temelleri ve olasılık modellerini içeren yedinci hafta ders notu.",
        topics: ["Kuantum hesaplama", "Matematiksel temeller", "Olasılık modelleri"],
        pdfs: [
          {
            title: "Kuantum Hesaplamanın Matematiksel Temelleri ve Olasılık Modelleri — 7. Hafta",
            type: "PDF",
            file: "/pdf/Bilgisayar Mühendisliğinde Gelişmeler/Kuantum Hesplamanın Matematiksel Temelleri ve Olasık Modelleri-7.hafta.pdf",
          },
        ],
      },
      {
        week: "Ders İçi",
        title: "Bilgisayar Mühendisliğinde Gelişmeler — Ders İçi Notlar",
        summary: "Ders sırasında tutulan ek çalışma notları.",
        topics: [],
        pdfs: [
          {
            title: "Bilgisayar Mühendisliğinde Gelişmeler — Ders İçi Notlar",
            type: "PDF",
            file: "/pdf/Bilgisayar Mühendisliğinde Gelişmeler/Bilgisyar Mühendisliğinde Gelişmler-Ders İçi Notlar.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "python-ile-veri-isleme",
    grade: "gelecek-donem",
    name: "Python ile Veri İşleme",
    icon: "🐍",
    description: "Python ile veri okuma, temizleme, dönüştürme, analiz etme ve görselleştirme.",
    status: "available",
    weeks: [
      {
        week: "Vize",
        title: "Python ile Veri İşleme — Vize Çalışma Notu",
        summary: "BILM470 vize sınavına hazırlık için soru ve konu anlatımlarını içeren çalışma notu.",
        topics: ["Vize hazırlığı", "Python", "Veri işleme", "Uygulama soruları"],
        pdfs: [
          {
            title: "BILM470 — Vize Soru Çalışma Notu",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/BILM470_VIZE_SORU_CALISMA_NOTU.pdf",
          },
        ],
      },
      {
        week: 1,
        title: "Python ile Veri İşleme — 1. Hafta",
        summary: "Araştırma problemi belirleme ve yapay zeka destekli literatür tarama konularını içeren birinci hafta ders notu.",
        topics: ["Araştırma problemi", "Literatür tarama", "Yapay zeka", "Akademik araştırma"],
        pdfs: [
          {
            title: "Araştırma Problemi Bulma ve Yapay Zeka Destekli Literatür Tarama — 1. Hafta",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/arastirma-problemi-yapay-zeka-literatur-tarama-1-hafta.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "Python ile Veri İşleme — 2. Hafta",
        summary: "İkinci haftaya ait Python ile veri işleme ders notu.",
        topics: ["Python", "Veri işleme", "Veri analizi", "Veri görselleştirme"],
        pdfs: [
          {
            title: "Python ile Veri İşleme — 2. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/Python İle Veri İşleme Ders Notu-2.hafta.pdf",
          },
        ],
      },
      {
        week: 3,
        title: "Python ile Veri İşleme — 3. Hafta",
        summary: "Üçüncü haftaya ait Python ile veri işleme ders notu.",
        topics: ["Python", "Veri işleme", "Veri analizi", "Veri görselleştirme"],
        pdfs: [
          {
            title: "Python ile Veri İşleme — 3. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/Python İle Veri İşleme Ders Notu-3.hafta.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "Python ile Veri İşleme — 4. Hafta",
        summary: "Özdeğer, özvektör ve temel bileşen analizi konularını içeren dördüncü hafta ders notu.",
        topics: ["Özdeğer", "Özvektör", "PCA"],
        pdfs: [
          {
            title: "Özdeğer, Özvektör ve PCA — 4. Hafta",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/Özdeğer Özvektör ve PCA-4.hafta.pdf",
          },
        ],
      },
      {
        week: 6,
        title: "Python ile Veri İşleme — 6. Hafta",
        summary: "Tekil değer ayrışımı ve düşük boyutlu temsil konularını içeren altıncı hafta ders notu.",
        topics: ["SVD", "Tekil değer ayrışımı", "Boyut indirgeme", "Düşük boyutlu temsil"],
        pdfs: [
          {
            title: "SVD ve Düşük Boyutlu Temsil — 6. Hafta",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/svd-dusuk-boyutlu-temsil-6-hafta.pdf",
          },
        ],
      },
      {
        week: 7,
        title: "Python ile Veri İşleme — 7. Hafta",
        summary: "En küçük kareler, regresyon ve kayıp fonksiyonlarını içeren yedinci hafta ders notu.",
        topics: ["En küçük kareler", "Regresyon", "Kayıp fonksiyonları", "Model uyumu"],
        pdfs: [
          {
            title: "Least Squares, Regresyon ve Loss — 7. Hafta",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/least-squares-regresyon-loss-7-hafta.pdf",
          },
        ],
      },
      {
        week: 8,
        title: "Python ile Veri İşleme — 8. Hafta",
        summary: "Gradient descent ve optimizasyon konularını içeren sekizinci hafta ders notu.",
        topics: ["Gradient descent", "Optimizasyon", "Kayıp fonksiyonları", "Türev"],
        pdfs: [
          {
            title: "Gradient Descent ve Optimizasyon — 8. Hafta",
            type: "PDF",
            file: "/pdf/Python ile Veri İşleme/Gradient Descent ve optimizasyon-8.hafta Ders notu.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "robotik",
    grade: "gelecek-donem",
    name: "Robotik",
    icon: "🦾",
    description: "Robot sistemleri, sensörler, hareket kontrolü ve robotik uygulamalar.",
    status: "available",
    weeks: [
      {
        week: "Vize",
        title: "Robotik — Vize Çalışmaları",
        summary: "Klasik vize soruları ile ayrı cevap anahtarını içeren çalışma dosyaları.",
        topics: ["Klasik sorular", "Robotik", "Vize hazırlığı", "Cevap anahtarı"],
        pdfs: [
          {
            title: "Robotik — Klasik Vize Soruları",
            type: "PDF",
            file: "/pdf/Robitik/Robotik_Vize_Klasik_Sorular_Cevap_Bosluklu.pdf",
          },
          {
            title: "Robotik — Klasik Vize Soruları Cevap Anahtarı",
            type: "PDF",
            file: "/pdf/Robitik/Robotik_Vize_Klasik_Sorular_Cevap_Anahtari.pdf",
          },
        ],
      },
      {
        week: 3,
        title: "Robotik — 3. Hafta",
        summary: "Üçüncü haftaya ait robotik ders notu.",
        topics: ["Robotik", "Robot sistemleri", "Sensörler", "Hareket kontrolü"],
        pdfs: [
          {
            title: "Robotik — 3. Hafta Ders Notu",
            type: "PDF",
            file: "/pdf/Robitik/Robotik Ders Notu-3. hafta.pdf",
          },
        ],
      },
      {
        week: 7,
        title: "Robotik — 7. Hafta",
        summary: "Graf tabanlı yöntemler ve metin özetleme konularını ele alan yedinci hafta ders notu.",
        topics: ["Graf tabanlı yöntemler", "Metin özetleme", "Doğal dil işleme", "Robotik"],
        pdfs: [
          {
            title: "Graf Tabanlı Yöntemler ve Metin Özetleme — 7. Hafta",
            type: "PDF",
            file: "/pdf/Robitik/graf-tabanli-yontemler-metin-ozetleme-7-hafta.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "is-sagligi-ve-guvenligi",
    grade: "gelecek-donem",
    name: "İş Sağlığı ve Güvenliği",
    icon: "🦺",
    description: "İş sağlığı ve güvenliğinin gelişimi, temel kavramları, amacı ve önemi.",
    status: "available",
    weeks: [
      {
        week: 1,
        title: "İş Sağlığı ve Güvenliği — 1. Hafta",
        summary: "İş sağlığı ve güvenliğinin kavramsal gelişimini ele alan birinci hafta ders notu.",
        topics: ["İSG", "Temel kavramlar", "Kavramsal gelişim"],
        pdfs: [
          {
            title: "İSG Kavramsal Gelişimi — 1. Hafta",
            type: "PDF",
            file: "/pdf/İSG/İSG Kavramsal Gelişimi-1.hafta Ders Notu.pdf",
          },
        ],
      },
      {
        week: 2,
        title: "İş Sağlığı ve Güvenliği — 2. Hafta",
        summary: "İş sağlığı ve güvenliğinin tarihsel gelişimini ele alan ikinci hafta ders notu.",
        topics: ["İSG tarihi", "Tarihsel gelişim", "Çalışma hayatı"],
        pdfs: [
          {
            title: "İSG Tarihsel Gelişimi — 2. Hafta",
            type: "PDF",
            file: "/pdf/İSG/İSG Tarihsel Gelişimi-2.hafta.pdf",
          },
        ],
      },
      {
        week: 3,
        title: "İş Sağlığı ve Güvenliği — 3. Hafta",
        summary: "İş sağlığı ve güvenliğinin amacı ile çalışanlar ve iş yerleri için önemini ele alan üçüncü hafta ders notu.",
        topics: ["İSG'nin amacı", "Risklerin önlenmesi", "Çalışan güvenliği"],
        pdfs: [
          {
            title: "İSG'nin Amacı ve Önemi — 3. Hafta",
            type: "PDF",
            file: "/pdf/İSG/İSG’nin Amacı ve Önemi-3.hafta Ders Notu.pdf",
          },
        ],
      },
      {
        week: 4,
        title: "İş Sağlığı ve Güvenliği — 4. Hafta",
        summary: "Uluslararası Çalışma Örgütü, uluslararası iş birliği ve İSG mevzuatını ele alan dördüncü hafta ders notu.",
        topics: ["Uluslararası iş birliği", "ILO", "İSG mevzuatı", "Yasal düzenlemeler"],
        pdfs: [
          {
            title: "Uluslararası İş Birliği ve İSG Mevzuatı — 4. Hafta",
            type: "PDF",
            file: "/pdf/isg/uluslararasi-is-birligi-ve-isg-mevzuati-4-hafta.pdf",
          },
        ],
      },
      {
        week: 5,
        title: "İş Sağlığı ve Güvenliği — 5. Hafta",
        summary: "İş kazası kavramını ve iş kazalarına ilişkin verileri ele alan beşinci hafta ders notu.",
        topics: ["İş kazası", "Temel kavramlar", "Kaza verileri", "İstatistikler"],
        pdfs: [
          {
            title: "İş Kazası Kavramı ve Veriler — 5. Hafta",
            type: "PDF",
            file: "/pdf/isg/is-kazasi-kavrami-ve-veriler-5-hafta.pdf",
          },
        ],
      },
      {
        week: 6,
        title: "İş Sağlığı ve Güvenliği — 6. Hafta",
        summary: "İş kazalarının nedenlerini ve kazaları açıklayan kuramları ele alan altıncı hafta ders notu.",
        topics: ["Kaza nedenleri", "Kaza kuramları", "Risk etmenleri", "Kök neden analizi"],
        pdfs: [
          {
            title: "Kaza Nedenleri ve Kuramlar — 6. Hafta",
            type: "PDF",
            file: "/pdf/isg/kaza-nedenleri-ve-kuramlar-6-hafta.pdf",
          },
        ],
      },
      {
        week: 7,
        title: "İş Sağlığı ve Güvenliği — 7. Hafta",
        summary: "İş kazalarının maliyetini ve kazaları önleme yaklaşımlarını ele alan yedinci hafta ders notu.",
        topics: ["Kaza maliyeti", "Kaza önleme", "Koruyucu yaklaşımlar", "İSG yönetimi"],
        pdfs: [
          {
            title: "Kaza Maliyeti ve Önleme — 7. Hafta",
            type: "PDF",
            file: "/pdf/isg/kaza-maliyeti-ve-onleme-7-hafta.pdf",
          },
        ],
      },
    ],
  },
];

export function getCoursesByGrade(gradeId) {
  return courses.filter((course) => course.grade === gradeId);
}

export function getCourseById(courseId) {
  return courses.find((course) => course.id === courseId);
}

export function getCourseFileCount(course) {
  return course.weeks?.reduce((total, week) => total + (week.pdfs?.length || 0), 0) || 0;
}

export function hasCourseNotes(course) {
  return getCourseFileCount(course) > 0;
}
