import image1 from "../assets/products/dibatic pic.jpg";
import image2 from "../assets/products/femetop.jpg";
import img3 from "../assets/products/gasrelex (2).jpg";
import img4 from "../assets/products/Ocimum.jpg";
import img5 from "../assets/products/fevertop.png";
import img6 from "../assets/products/memory pic.jpg";
import img7 from "../assets/products/heart pic.jpg";
import img8 from "../assets/products/fevertop.png";
import img9 from "../assets/products/mc relex .1.png";
import img10 from "../assets/products/Baby Tonic.jpg";

const ayurvedicProducts = [
    {
      name: "Heart Booster",
      type: "Ayurvedic Syrup",
      description: "Cures heart problems.",
      benefits: [
        "Helps to control blood pressure",
        "Proper functioning of the heart",
        "Maintain cholesterol levels",
        "Improve blood circulation",
        "Helps in hypertension and insomnia",
      ],
      symptoms: [
        "Irregular heartbeats",
        "Discomfort",
        "Chest problems",
        "Indigestion",
        "Heartburn",
      ],
      clinicalStudy:
        "This natural syrup helps to control blood pressure, maintain cholesterol levels, and improve cardiac function. It is anti-stress, antioxidant, strengthens immunity, and improves blood circulation.",
      dosage: "10 to 20ml twice a day diluted in water or as prescribed by a physician.",
      size: "200 ml",
      image: img7,
    },
    {
      name: "Baby Tonic",
      type: "Ayurvedic Syrup",
      description: "Promotes healthy growth and development in kids.",
      benefits: [
        "Increases appetite",
        "Strengthens bones",
        "Promotes development and growth",
        "Helpful in teething",
        "Prevents neonatal problems like colic pain",
        "Improves digestion",
      ],
      symptoms: [
        "Indigestion",
        "Irritability",
        "Teething problems",
        "Not eating properly",
        "Stomach problems",
      ],
      clinicalStudy:
        "This ayurvedic syrup is effective for growing kids, makes them physically and mentally strong, and increases appetite. Its regular usage strengthens bones and reduces teething irritation.",
      dosage: "10 to 20ml twice a day or as directed by a physician.",
      size: "100 ml",
      image: img10,
    },
    {
      name: "Diabetic Syrup",
      type: "Ayurvedic Syrup",
      description: "Controls blood sugar levels.",
      benefits: [
        "Maintains blood sugar levels",
        "Decreases urine sugar levels",
        "Prevents blood pressure problems",
        "Purifies blood and heals wounds",
        "Improves kidney function",
        "Enhances tissue efficiency",
        "Improves digestion",
      ],
      symptoms: [
        "Frequent urination",
        "Weakness",
        "Blurry vision",
        "Blood pressure problems",
        "Slow healing wounds",
      ],
      clinicalStudy:
        "Controls and maintains blood sugar levels, improves kidney and nervous function, purifies blood, and heals wounds naturally.",
      dosage: "10 to 20ml twice a day diluted in water or as prescribed by a physician.",
      size: "200 ml",
      image: image1,
    },
    {
      name: "Ocimum",
      type: "Ayurvedic Syrup",
      description: "Quick relief in cold and cough.",
      benefits: [
        "Relieves allergic or bacterial coughs",
        "Loosens sputum",
        "Relief in asthma, bronchitis, and tuberculosis",
        "Prevents viral infections",
        "Cleans bronchi",
        "Boosts immunity",
      ],
      symptoms: [
        "Sore throat",
        "Runny nose",
        "Severe cold and cough",
        "Bronchial asthma",
        "Whooping cough",
      ],
      clinicalStudy:
        "Formulated with herbs like Mulethi, Adusa, and Anjeer. Treats cold and cough symptoms naturally without side effects.",
      dosage:
        "Adults: 2 teaspoons thrice a day with warm water. Children: 1 teaspoon morning and evening with warm water.",
      size: "100 ml",
      image: img4,
    },
    {
      name: "Femetop",
      type: "Ayurvedic Syrup",
      description: "Cures gynecological disorders.",
      benefits: [
        "Cures leucorrhoea",
        "Regulates menstrual cycle",
        "Relieves pelvic pain and swelling",
        "Cures infertility",
        "Balances female hormones",
        "Strengthens the uterus",
        "Prevents iron and calcium deficiency",
        "Prevents menopausal problems",
      ],
      symptoms: [
        "Stomach, leg, and back pain",
        "Depression, stress, and anxiety",
        "Premenstrual tension",
        "Hormonal imbalance and mood swings",
      ],
      clinicalStudy:
        "Contains 20 herbs like Satavari and Manjistha. Treats disorders naturally without side effects.",
      dosage:
        "3 teaspoons twice a day with half a cup of water after eating or as directed by a physician.",
      size: "300 ml",
      image: image2,
    },
    {
      name: "MC Relex",
      type: "Ayurvedic Syrup",
      description: "Ensures a healthy menstrual cycle.",
      benefits: [
        "Clean, healthy, and painless menstruation",
        "Controls inflammation due to cramps",
        "Controls mood swings",
        "Regulates irregular menstruation",
        "Cures premenstrual syndrome",
        "Cures anemia",
        "Ensures proper functioning of reproductive organs",
      ],
      symptoms: [
        "Menstrual disorders",
        "Weakness",
        "Anemia",
        "Mood swings",
        "Irritability",
        "Painful menstruation",
      ],
      clinicalStudy:
        "Ingredients like Ashoka and Grat Kumari balance hormones and restore hemoglobin levels, improving reproductive health.",
      dosage:
        "Take 3 days before menstruation. 30 minutes before meals or before sleeping. Avoid cold food and water.",
      size: "200 ml",
      importantNote: "Not for pregnant women as it may cause miscarriage.",
      image: img9,
    },
    {
      name: "Fevertop",
      type: "Ayurvedic Syrup",
      description: "Fights fever by boosting immunity.",
      benefits: [
        "Improves immunity",
        "Fights fever and infections",
        "Relief in cold and cough",
        "Increases platelet count",
        "Improves appetite",
        "Relieves body aches",
      ],
      symptoms: [
        "Common cold and cough",
        "Loss of appetite",
        "Viral or any kind of fever",
        "Weak immunity",
        "Weakness",
      ],
      clinicalStudy:
        "Boosts immunity, increases RBC and platelet count, and alleviates symptoms of fever and weakness naturally.",
      dosage: "10 to 20ml thrice a day with warm water or as prescribed.",
      size: "200 ml",
      image: img8,
    },
    {
      name: "Livcure-DS",
      type: "Ayurvedic Syrup",
      description: "Heals and strengthens a weak liver.",
      benefits: [
        "Strengthens the liver",
        "Increases appetite",
        "Relieves constipation",
        "Reduces fatty liver",
        "Cures jaundice",
        "Prevents inflammation of the gall bladder",
      ],
      symptoms: [
        "Yellow urination",
        "Dirty tongue",
        "Hair loss",
        "Lethargy",
        "Indigestion",
      ],
      clinicalStudy:
        "Combines 17 herbs like Kutaki and Kasoundhi for antioxidant benefits and liver health.",
      dosage:
        "15ml with half a cup of water after meals or as directed by a physician.",
      size: "200 ml",
      image: img6,
    },
    {
      name: "Memory Vitalizer",
      type: "Ayurvedic Syrup",
      description: "Boosts mental improvement.",
      benefits: [
        "Reduces mental stress",
        "Enhances learning capabilities",
        "Calms the mind",
        "Improves nervous system function",
        "Boosts memory",
      ],
      symptoms: [
        "Lack of sleep",
        "Anxiety",
        "Laziness",
        "Forgetfulness",
        "Mental stress",
      ],
      clinicalStudy:
        "Contains herbs like Sankhpushpi and Brahmi to improve brain function and reduce stress.",
      dosage: "10 to 20ml twice a day or as directed by a physician.",
      size: "200 ml",
      image: img6,
    },
    {
      name: "Gasrelex",
      type: "Ayurvedic Syrup",
      description: "Relieves gastric troubles.",
      benefits: [
        "Improves digestion",
        "Enhances bile juice secretion",
        "Relieves hyperacidity",
        "Reduces burning sensation",
        "Heals ulcer wounds",
        "Prevents indigestion",
      ],
      symptoms: [
        "Heartburn",
        "Ulcer pain",
        "Eating disorders",
        "Bloating and flatulence",
        "Loss of appetite",
      ],
      clinicalStudy:
        "Contains herbs like Amla, Nagarmotha, and Mulethi for effective digestion support.",
      dosage:
        "3 teaspoons morning and evening with half a cup of water after meals or as directed by a physician.",
      size: "200 ml",
      image: img3,
    },
  ];
  