export const projects = [
  {
    id: "yekdb",
    number: "01",
    title: "YEKDB",
    shortTitle: "YEKDB",
    status: "Aktif Geliştirme",
    accent: "Database System",
    category: "Java · DBMS",
    summary:
      "Java 21 ile sıfırdan geliştirilen eğitim odaklı ilişkisel veritabanı yönetim sistemi. Storage engine'den SQL parser'a, JOIN execution'dan optimizer katmanına kadar çekirdek parçalar bağımsız olarak inşa ediliyor.",
    description:
      "YEKDB, hazır bir veritabanı motorunu arka planda kullanmadan ilişkisel veritabanlarının iç mimarisini anlamak amacıyla geliştiriliyor. Fiziksel depolama, page/record yönetimi, tablo ve index altyapısı, SQL ayrıştırma, expression evaluation, query execution ve JOIN pipeline tek bir modüler sistem altında birleşiyor.",
    tech: ["Java 21", "Maven", "JUnit 5", "SQL Parser", "Storage Engine", "Query Optimizer"],
    github: "https://github.com/EmreBEYS/YEKDB",
    metric: "940",
    metricLabel: "regression test",
    visualType: "image",
    cover: "https://raw.githubusercontent.com/EmreBEYS/YEKDB/main/docs/screenshots/00-12/CRUD%20Mutation%20Architecture.png",
    visuals: [
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/YEKDB/main/docs/screenshots/00-10/Query_Execution_Architecture.png",
        title: "Query Execution Architecture",
        caption: "SQL sorgusunun executor katmanlarına ilerlediği çekirdek akış.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/YEKDB/main/docs/screenshots/00-12/CRUD%20Mutation%20Architecture.png",
        title: "CRUD Mutation Architecture",
        caption: "INSERT, UPDATE ve DELETE operasyonlarının mutation pipeline'ı.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/YEKDB/main/docs/screenshots/00-12/INSERT%20Execution%20Flow.png",
        title: "INSERT Execution Flow",
        caption: "INSERT komutunun parser'dan storage katmanına kadar yürütülmesi.",
      },
    ],
    highlights: [
      "INNER, LEFT, RIGHT ve FULL JOIN desteği",
      "Multiple JOIN chain ve aggregate pipeline",
      "Rule-based JOIN optimizer",
      "Custom physical storage ve record/page management",
    ],
  },
  {
    id: "java-data-structures",
    number: "02",
    title: "Java Data Structures Visualizer",
    shortTitle: "Data Structures",
    status: "Tamamlandı",
    accent: "Algorithms",
    category: "Java · Algorithms",
    summary:
      "Dynamic Array'den Graph'a kadar temel ve ileri veri yapılarını sıfırdan implemente eden; demo sınıfları, JUnit testleri ve teknik dokümantasyon içeren kapsamlı Java projesi.",
    description:
      "Proje, Java Collections Framework'ü yalnızca sonuç olarak kullanmak yerine veri yapılarının iç çalışma mantığını doğrudan implemente etmeye odaklanıyor. Array, linked list ailesi, stack, queue, BST/AVL, heap, hash map ve graph modülleri ayrı ayrı geliştirildi ve test edildi.",
    tech: ["Java 21", "JUnit 5", "Algorithms", "Trees", "Hash Map", "Graph"],
    github: "https://github.com/EmreBEYS/Java-Data-Structures-Visualizer",
    metric: "8",
    metricLabel: "ana veri yapısı modülü",
    visualType: "code",
    highlights: [
      "BST ve AVL balancing",
      "Min Heap / Max Heap",
      "Separate Chaining Hash Map",
      "Directed / Undirected Graph + BFS / DFS",
    ],
  },
  {
    id: "public-transport",
    number: "03",
    title: "Public Transport Decision Support System",
    shortTitle: "Transport DSS",
    status: "Geliştiriliyor",
    accent: "Smart Mobility",
    category: "Python · Simulation",
    summary:
      "Şehir içi toplu taşımada yolcu yoğunluğu, araç doluluk oranı ve operasyon koşullarını izleyerek karar önerileri üreten simülasyon ve karar destek sistemi.",
    description:
      "Sistem; birden fazla otobüsü, duraklardaki yolcu hareketlerini, kapasiteyi ve operasyonel olayları eş zamanlı simüle eder. Canlı istatistikler ve karar kuralları, sefer sıklığı veya ek araç ihtiyacı gibi aksiyonların değerlendirilmesini sağlar.",
    tech: ["Python", "Tkinter", "Matplotlib", "Simulation", "Analytics", "OOP"],
    github: "https://github.com/EmreBEYS/Public-Transport-Decision-Support-System",
    metric: "3",
    metricLabel: "canlı uygulama görünümü",
    visualType: "image",
    cover: "https://raw.githubusercontent.com/EmreBEYS/Public-Transport-Decision-Support-System/main/screenshots/app1.png",
    visuals: [
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/Public-Transport-Decision-Support-System/main/screenshots/app1.png",
        title: "Main Interface",
        caption: "Simülasyon kontrolleri ve rota durumunun ana görünümü.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/Public-Transport-Decision-Support-System/main/screenshots/app2.png",
        title: "Running Simulation",
        caption: "Araç ve yolcu hareketlerinin çalışma anındaki görünümü.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/Public-Transport-Decision-Support-System/main/screenshots/app3.png",
        title: "Statistics & Analytics",
        caption: "Yoğunluk ve doluluk verilerinin analitik görünümü.",
      },
    ],
    highlights: [
      "Multi-bus fleet simulation",
      "Passenger boarding / alighting",
      "Capacity and congestion analysis",
      "Operational decision support rules",
    ],
  },
  {
    id: "motas-smart-dispatch",
    number: "04",
    title: "MOTAŞ Smart Dispatch System",
    shortTitle: "MOTAŞ Dispatch",
    status: "Aktif Proje",
    accent: "Smart Mobility",
    category: "Dispatch · Decision Support",
    summary:
      "Toplu taşıma operasyonlarında araç, durak ve yoğunluk durumlarını tek bir karar katmanında birleştiren akıllı dispatch ve operasyon destek sistemi.",
    description:
      "MOTAŞ Smart Dispatch System; toplu taşıma operasyonlarında yoğunluk, araç hareketleri ve sefer koşullarını anlamlı karar sinyallerine dönüştürmeye odaklanıyor. Amaç yalnızca veriyi göstermek değil; operasyon ekibinin sefer yönetimi ve müdahale kararlarını daha hızlı değerlendirebileceği modüler bir sistem oluşturmak.",
    tech: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "Bootstrap", "OpenAI API"],
    github: "https://github.com/EmreBEYS/MOTAS-Smart-Dispatch-System",
    metric: "8",
    metricLabel: "gerçek uygulama ekranı",
    visualType: "image",
    cover: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/home.PNG",
    visuals: [
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/home.PNG",
        title: "Passenger Homepage",
        caption: "Yolcu tarafındaki ana sayfa ve modern servis deneyimi.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/home2.JPG",
        title: "Homepage Services",
        caption: "Hat, durak ve yolcu servislerinin ana deneyimde sunulduğu bölüm.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/admin.JPG",
        title: "Administration Dashboard",
        caption: "Operasyon ve yönetim işlemlerinin toplandığı yönetici paneli.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/station.JPG",
        title: "Bus Stops",
        caption: "Durakların listelendiği yolcu bilgi ekranı.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/stationdetails.JPG",
        title: "Stop Detail",
        caption: "Seçilen durağın detaylı bilgi görünümü.",
      },
      {
        src: "https://raw.githubusercontent.com/EmreBEYS/MOTAS-Smart-Dispatch-System/main/docs/screenshots/login.JPG",
        title: "Login Experience",
        caption: "Kullanıcı giriş ekranı.",
      },
    ],
    highlights: [
      "Yolcu tarafı için hat, durak, arama ve duyuru deneyimi",
      "Route, stop, bus, driver ve trip yönetimi için admin paneli",
      "AI destekli rota önerisi ve karar destek altyapısı",
      "PostgreSQL + SQLAlchemy tabanlı veri katmanı",
    ],
  },
];

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project]));
