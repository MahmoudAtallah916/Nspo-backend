// utils/seedCompanies.js
import mongoose from 'mongoose';
import Company from './src/models/Company.js';
import dotenv from 'dotenv';
dotenv.config();

// هنا هتحط الـ JSON بتاعك (البيانات الكاملة)
const companiesData = {
  "companies": [
    {
      "sector_ar": "قطاع الصناعات الثقيلة والمتخصصة",
      "sector_en": "Heavy and Specialized Industries Sector",
      "sector_fr": "Secteur des industries lourdes et spécialisées",
      "gradient": "from-blue-500/90 to-cyan-600/90",
      "companies": [
        {
          "id": 1,
          "ar": "شركة النصر للكيماويات الوسيطة",
          "en": "Al Nasr for Intermediate Chemicals",
          "fr": "Société Al Nasr pour les produits chimiques intermédiaires",
          "logo": "/assets/images/companies_logo/chem.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/elnsar/cloar.webp",
                "title": "مصانع الغازات  الطبيةوالصناعية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/elnsar/70.webp",
                "title": "مصانع الكلور والصودا الكاوية",
                "description": "خطوط إنتاج متطورة بطاقات إنتاجية عالية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/elnsar/1.webp",
                "title": "مصانع الكيماويات الصلبة",
                "description": "معامل متقدمة لضمان أعلى معايير الجودة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/elnsar/aa.webp",
                "title": " مصنع الأيروسولات",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/elnsar/zz.webp",
                "title": "مصنع سماد كبريتات البوتاسيوم",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/elnsar/DJI_0167.MP4.00_01_39_32.Still001.webp",
                "title": "مصانع الغازات  الطبيةوالصناعية",
                "description": "أسطول نقل متكامل"
              },

              {
                "id": 7,
                "url": "/assets/images/comp_factories/elnsar/7.webp",
                "title": "مصانع شركة النصر",
                "description": "تصميم هندسي مبتكر يضمن أعلى معايير الجودة"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/elnsar/8.webp",
                "title": "مصانع شركة النصر",
                "description": "بيئة عمل آمنة ومطابقة للمواصفات القياسية"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/elnsar/9.webp",
                "title": "مصانع شركة النصر",
                "description": "تكنولوجيا متقدمة في مجال الصناعات الكيماوية"
              },

              {
                "id": 11,
                "url": "/assets/images/comp_factories/elnsar/11.webp",
                "title": "مصانع شركة النصر",
                "description": "مرافق صناعية مجهزة بأحدث الأجهزة"
              },

              {
                "id": 13,
                "url": "/assets/images/comp_factories/elnsar/13.webp",
                "title": "مصانع شركة النصر",
                "description": "التزام تام بمعايير السلامة العالمية"
              },
              {
                "id": 14,
                "url": "/assets/images/comp_factories/elnsar/14.webp",
                "title": "مصانع شركة النصر",
                "description": "بنية تحتية متكاملة ومتطورة"
              },
              {
                "id": 15,
                "url": "/assets/images/comp_factories/elnsar/15.webp",
                "title": "مصانع شركة النصر",
                "description": "تحكم آلي متكامل في العمليات الإنتاجية"
              },

              {
                "id": 17,
                "url": "/assets/images/comp_factories/elnsar/17.webp",
                "title": "مصانع شركة النصر",
                "description": "جودة منتجات تلبي احتياجات السوق المحلي والعالمي"
              },

              {
                "id": 19,
                "url": "/assets/images/comp_factories/elnsar/19.webp",
                "title": "مصانع شركة النصر",
                "description": "رؤية صناعية طموحة لمستقبل أفضل"
              },

              {
                "id": 21,
                "url": "/assets/images/comp_factories/elnsar/21.webp",
                "title": "مصانع شركة النصر",
                "description": "تميز في إدارة العمليات الصناعية"
              },

              {
                "id": 23,
                "url": "/assets/images/comp_factories/elnsar/23.webp",
                "title": "مصانع شركة النصر",
                "description": "مساهمة فاعلة في الاقتصاد الوطني"
              },

              {
                "id": 25,
                "url": "/assets/images/comp_factories/elnsar/25.webp",
                "title": "مصانع شركة النصر",
                "description": "إرث صناعي يعزز مكانة مصر الصناعية"
              },
              {
                "id": 27,
                "url": "/assets/images/comp_factories/elnsar/27.webp",
                "title": "مصانع شركة النصر",
                "description": "إرث صناعي يعزز مكانة مصر الصناعية"
              }
            ],
            "establishment_year": "1981",
            "description_ar": "أنشئت الشركة عام 1972 بهدف توفير احتياجات البلاد من الكلور باعتباره المادة الحيوية الأساسية المستخدمة في تعقيم مياه الشرب والصودا الكاوية وإنشاء شبكات الغازات الطبية للمستشفيات. تنتج الشركة الأسمدة والمخصبات الزراعية والمبيدات الزراعية السائلة والصلبة والغازات الطبية والصناعية والشبة السائلة والصلبة والكلور والصودا الكاوية والأحماض المختلفة وكذلك إنتاج الإيروسولات بأنواعها المختلفة.",
            "description_en": "The company was established in 1972 to provide the country's needs for chlorine as a basic vital material used in sterilizing drinking water, caustic soda, and establishing medical gas networks for hospitals. The company produces fertilizers, agricultural fertilizers, liquid and solid agricultural pesticides, medical and industrial gases, liquid and solid alum, chlorine, caustic soda, various acids, as well as producing aerosols of various types.",
            "description_fr": "La société a été créée en 1972 pour répondre aux besoins du pays en chlore en tant que matière vitale de base utilisée dans la stérilisation de l'eau potable, la soude caustique et la création de réseaux de gaz médicaux pour les hôpitaux. La société produit des engrais, des fertilisants agricoles, des pesticides agricoles liquides et solides, des gaz médicaux et industriels, de l'alun liquide et solide, du chlore, de la soude caustique, divers acides, ainsi que des aérosols de différents types.",
            "products": [
              "الكلور",
              "الصودا الكاوية",
              "الأسمدة",
              "المبيدات الزراعية",
              "الغازات الطبية والصناعية",
              "الشبة السائلة والصلبة",
              "الأحماض المختلفة",
              "الإيروسولات"
            ],
            "contact": {
              "address": "طريق القاهرة– الإسكندرية الصحراوي– الكيلو 28 المنطقة الصناعية بأبى رواش– الجيزة – بجوار القرية الذكية",
              "phone": "02/35391640 – 02/35391641",
              "fax": "02/35390560",
              "email": ""
            },
            "locations": [
              {
                "location_ar": "أبو رواش - الجيزة",
                "location_en": "Abu Rawash - Giza",
                "location_fr": "Abu Rawash - Gizeh",
                "governorate_ar": "الجيزة",
                "governorate_en": "Giza",
                "governorate_fr": "Gizeh",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع إنتاج الكلور رقم (1)",
                    "factory_en": "Chlorine Production Plant No. (1)",
                    "factory_fr": "Usine de production de chlore n° (1)",
                    "products": [
                      {
                        "product_ar": "غاز كلور سائل - صودا كاوية سائلة - صودا كاوية قشور - هيبوكلوريت الصوديوم - حامض هيدروكلوريك",
                        "product_en": "Liquid chlorine gas - Liquid caustic soda - Flake caustic soda - Sodium hypochlorite - Hydrochloric acid",
                        "product_fr": "Gaz chlore liquide - Soude caustique liquide - Soude caustique en paillettes - Hypochlorite de sodium - Acide chlorhydrique",
                        "product_image": "/assets/images/Products/chlorine.webp",
                        "capacity": 5000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الكلور رقم (2)",
                    "factory_en": "Chlorine Production Plant No. (2)",
                    "factory_fr": "Usine de production de chlore n° (2)",
                    "products": [
                      {
                        "product_ar": "غاز كلور سائل - صودا كاوية سائلة - صودا كاوية قشور - هيبوكلوريت الصوديوم - حامض هيدروكلوريك",
                        "product_en": "Liquid chlorine gas - Liquid caustic soda - Flake caustic soda - Sodium hypochlorite - Hydrochloric acid",
                        "product_fr": "Gaz chlore liquide - Soude caustique liquide - Soude caustique en paillettes - Hypochlorite de sodium - Acide chlorhydrique",
                        "product_image": "/assets/images/Products/chlorine.webp",
                        "capacity": 8000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الكلور رقم (3)",
                    "factory_en": "Chlorine Production Plant No. (3)",
                    "factory_fr": "Usine de production de chlore n° (3)",
                    "products": [
                      {
                        "product_ar": "غاز كلور سائل - صودا كاوية سائلة - صودا كاوية قشور - هيبوكلوريت الصوديوم - حامض هيدروكلوريك",
                        "product_en": "Liquid chlorine gas - Liquid caustic soda - Flake caustic soda - Sodium hypochlorite - Hydrochloric acid",
                        "product_fr": "Gaz chlore liquide - Soude caustique liquide - Soude caustique en paillettes - Hypochlorite de sodium - Acide chlorhydrique",
                        "product_image": "/assets/images/Products/chlorine.webp",
                        "capacity": 9000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الكلور رقم (4)",
                    "factory_en": "Chlorine Production Plant No. (4)",
                    "factory_fr": "Usine de production de chlore n° (4)",
                    "products": [
                      {
                        "product_ar": "غاز كلور سائل - صودا كاوية سائلة - صودا كاوية قشور - هيبوكلوريت الصوديوم - حامض هيدروكلوريك",
                        "product_en": "Liquid chlorine gas - Liquid caustic soda - Flake caustic soda - Sodium hypochlorite - Hydrochloric acid",
                        "product_fr": "Gaz chlore liquide - Soude caustique liquide - Soude caustique en paillettes - Hypochlorite de sodium - Acide chlorhydrique",
                        "product_image": "/assets/images/Products/chlorine.webp",
                        "capacity": 25000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الأيروسولات رقم (1)",
                    "factory_en": "Aerosols Production Plant No. (1)",
                    "factory_fr": "Usine de production d'aérosols n° (1)",
                    "products": [
                      {
                        "product_ar": "مبيدات الحشرات الطائرة والزاحفة - معطرات الجو - كريم الحلاقة - ملمع المنتجات الجلدية",
                        "product_en": "Flying and crawling insect pesticides - Air fresheners - Shaving cream - Leather product polish",
                        "product_fr": "Pesticides pour insectes volants et rampants - Assainisseurs d'air - Crème à raser - Polish pour produits en cuir",
                        "product_image": "/assets/images/Products/aerosols.webp",
                        "capacity": 10,
                        "unit_ar": "مليون علبة/عام",
                        "unit_en": "million cans/year",
                        "unit_fr": "millions de boîtes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الأيروسولات رقم (2)",
                    "factory_en": "Aerosols Production Plant No. (2)",
                    "factory_fr": "Usine de production d'aérosols n° (2)",
                    "products": [
                      {
                        "product_ar": "مبيدات الحشرات الطائرة والزاحفة - معطرات الجو - كريم الحلاقة - ملمع المنتجات الجلدية",
                        "product_en": "Flying and crawling insect pesticides - Air fresheners - Shaving cream - Leather product polish",
                        "product_fr": "Pesticides pour insectes volants et rampants - Assainisseurs d'air - Crème à raser - Polish pour produits en cuir",
                        "product_image": "/assets/images/Products/aerosols.webp",
                        "capacity": 15,
                        "unit_ar": "مليون علبة/عام",
                        "unit_en": "million cans/year",
                        "unit_fr": "millions de boîtes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الأيروسولات رقم (3)",
                    "factory_en": "Aerosols Production Plant No. (3)",
                    "factory_fr": "Usine de production d'aérosols n° (3)",
                    "products": [
                      {
                        "product_ar": "مبيدات الحشرات الطائرة والزاحفة - معطرات الجو - كريم الحلاقة - ملمع المنتجات الجلدية",
                        "product_en": "Flying and crawling insect pesticides - Air fresheners - Shaving cream - Leather product polish",
                        "product_fr": "Pesticides pour insectes volants et rampants - Assainisseurs d'air - Crème à raser - Polish pour produits en cuir",
                        "product_image": "/assets/images/Products/aerosols.webp",
                        "capacity": 10,
                        "unit_ar": "مليون علبة/عام",
                        "unit_en": "million cans/year",
                        "unit_fr": "millions de boîtes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الأيروسولات رقم (4)",
                    "factory_en": "Aerosols Production Plant No. (4)",
                    "factory_fr": "Usine de production d'aérosols n° (4)",
                    "products": [
                      {
                        "product_ar": "مبيدات الحشرات الطائرة والزاحفة - معطرات الجو - كريم الحلاقة - ملمع المنتجات الجلدية",
                        "product_en": "Flying and crawling insect pesticides - Air fresheners - Shaving cream - Leather product polish",
                        "product_fr": "Pesticides pour insectes volants et rampants - Assainisseurs d'air - Crème à raser - Polish pour produits en cuir",
                        "product_image": "/assets/images/Products/aerosols.webp",
                        "capacity": 30,
                        "unit_ar": "مليون علبة/عام",
                        "unit_en": "million cans/year",
                        "unit_fr": "millions de boîtes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج غازات طبية وصناعية رقم (1)",
                    "factory_en": "Medical and Industrial Gases Production Plant No. (1)",
                    "factory_fr": "Usine de production de gaz médicaux et industriels n° (1)",
                    "products": [
                      {
                        "product_ar": "أكسجين سائل - نيتروجين سائل - أرغون سائل",
                        "product_en": "Liquid oxygen - Liquid nitrogen - Liquid argon",
                        "product_fr": "Oxygène liquide - Azote liquide - Argon liquide",
                        "product_image": "/assets/images/Products/medical_gases.webp",
                        "capacity": 7200,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج غازات طبية وصناعية رقم (2)",
                    "factory_en": "Medical and Industrial Gases Production Plant No. (2)",
                    "factory_fr": "Usine de production de gaz médicaux et industriels n° (2)",
                    "products": [
                      {
                        "product_ar": "أكسجين سائل - نيتروجين سائل - أرغون سائل",
                        "product_en": "Liquid oxygen - Liquid nitrogen - Liquid argon",
                        "product_fr": "Oxygène liquide - Azote liquide - Argon liquide",
                        "product_image": "/assets/images/Products/medical_gases.webp",
                        "capacity": 14400,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج غازات طبية وصناعية رقم (3)",
                    "factory_en": "Medical and Industrial Gases Production Plant No. (3)",
                    "factory_fr": "Usine de production de gaz médicaux et industriels n° (3)",
                    "products": [
                      {
                        "product_ar": "أكسجين سائل - نيتروجين سائل - أرغون سائل",
                        "product_en": "Liquid oxygen - Liquid nitrogen - Liquid argon",
                        "product_fr": "Oxygène liquide - Azote liquide - Argon liquide",
                        "product_image": "/assets/images/Products/medical_gases.webp",
                        "capacity": 33000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج غازات طبية وصناعية رقم (4)",
                    "factory_en": "Medical and Industrial Gases Production Plant No. (4)",
                    "factory_fr": "Usine de production de gaz médicaux et industriels n° (4)",
                    "products": [
                      {
                        "product_ar": "أكسجين سائل - نيتروجين سائل - أرغون سائل",
                        "product_en": "Liquid oxygen - Liquid nitrogen - Liquid argon",
                        "product_fr": "Oxygène liquide - Azote liquide - Argon liquide",
                        "product_image": "/assets/images/Products/medical_gases.webp",
                        "capacity": 36500,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج غازات طبية وصناعية رقم (5)",
                    "factory_en": "Medical and Industrial Gases Production Plant No. (5)",
                    "factory_fr": "Usine de production de gaz médicaux et industriels n° (5)",
                    "products": [
                      {
                        "product_ar": "أكسجين سائل - نيتروجين سائل - أرغون سائل",
                        "product_en": "Liquid oxygen - Liquid nitrogen - Liquid argon",
                        "product_fr": "Oxygène liquide - Azote liquide - Argon liquide",
                        "product_image": "/assets/images/Products/medical_gases.webp",
                        "capacity": 36500,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج اكسيد النيتروز الطبي",
                    "factory_en": "Medical Nitrous Oxide Production Plant",
                    "factory_fr": "Usine de production d'oxyde nitreux médical",
                    "products": [
                      {
                        "product_ar": "غاز أكسيد النيتروز الطبي",
                        "product_en": "Medical nitrous oxide gas",
                        "product_fr": "Gaz d'oxyde nitreux médical",
                        "product_image": "/assets/images/Products/nitrous_oxide.webp",
                        "capacity": 300,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج غاز الاستيلين",
                    "factory_en": "Acetylene Gas Production Plant",
                    "factory_fr": "Usine de production de gaz acétylène",
                    "products": [
                      {
                        "product_ar": "غاز الاستيلين",
                        "product_en": "Acetylene gas",
                        "product_fr": "Gaz acétylène",
                        "product_image": "/assets/images/Products/acetylene.webp",
                        "capacity": 25000,
                        "unit_ar": "م3/عام",
                        "unit_en": "m3/year",
                        "unit_fr": "m3/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج المبيدات الزراعية الصلبة",
                    "factory_en": "Solid Agricultural Pesticides Production Plant",
                    "factory_fr": "Usine de production de pesticides agricoles solides",
                    "products": [
                      {
                        "product_ar": "مبيدات الآفات الزراعية الحشرية والفطرية - أسمدة زراعية سائلة",
                        "product_en": "Insect and fungal agricultural pest pesticides - Liquid agricultural fertilizers",
                        "product_fr": "Pesticides pour ravageurs agricoles insectes et fongiques - Engrais agricoles liquides",
                        "product_image": "/assets/images/Products/pesticides.webp",
                        "capacity": 7700,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج المبيدات الزراعية السائلة",
                    "factory_en": "Liquid Agricultural Pesticides Production Plant",
                    "factory_fr": "Usine de production de pesticides agricoles liquides",
                    "products": [
                      {
                        "product_ar": "مبيدات الآفات الزراعية الحشرية والفطرية - أسمدة زراعية سائلة",
                        "product_en": "Insect and fungal agricultural pest pesticides - Liquid agricultural fertilizers",
                        "product_fr": "Pesticides pour ravageurs agricoles insectes et fongiques - Engrais agricoles liquides",
                        "product_image": "/assets/images/Products/pesticides.webp",
                        "capacity": 7700,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الكيماويات والأسمدة السائلة",
                    "factory_en": "Liquid Chemicals and Fertilizers Production Plant",
                    "factory_fr": "Usine de production de produits chimiques et engrais liquides",
                    "products": [
                      {
                        "product_ar": "مبيدات الآفات الزراعية الحشرية والفطرية - أسمدة زراعية سائلة",
                        "product_en": "Insect and fungal agricultural pest pesticides - Liquid agricultural fertilizers",
                        "product_fr": "Pesticides pour ravageurs agricoles insectes et fongiques - Engrais agricoles liquides",
                        "product_image": "/assets/images/Products/pesticides.webp",
                        "capacity": 7700,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الأقراص الطاردة للبعوض",
                    "factory_en": "Mosquito Repellent Tablets Production Plant",
                    "factory_fr": "Usine de production de comprimés répulsifs pour moustiques",
                    "products": [
                      {
                        "product_ar": "الأقراص الطاردة للبعوض",
                        "product_en": "Mosquito repellent tablets",
                        "product_fr": "Comprimés répulsifs pour moustiques",
                        "product_image": "/assets/images/Products/mosquito_tablets.webp",
                        "capacity": 60,
                        "unit_ar": "مليون قرص/عام",
                        "unit_en": "million tablets/year",
                        "unit_fr": "millions de comprimés/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الفيبر جلاس",
                    "factory_en": "Fiberglass Plant",
                    "factory_fr": "Usine de fibre de verre",
                    "products": [
                      {
                        "product_ar": "منتجات فيبر جلاس (خزان + مواسير) سعات وأقطار مختلفة",
                        "product_en": "Fiberglass products (tanks + pipes) different capacities and diameters",
                        "product_fr": "Produits en fibre de verre (réservoirs + tuyaux) différentes capacités et diamètres",
                        "product_image": "/assets/images/Products/fiberglass.webp",
                        "capacity": 0,
                        "unit_ar": "---",
                        "unit_en": "---",
                        "unit_fr": "---"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع فوق اكسيد الهيدروجين",
                    "factory_en": "Hydrogen Peroxide Plant",
                    "factory_fr": "Usine de peroxyde d'hydrogène",
                    "products": [
                      {
                        "product_ar": "فوق اكسيد الهيدروجين 50%",
                        "product_en": "Hydrogen peroxide 50%",
                        "product_fr": "Peroxyde d'hydrogène 50%",
                        "product_image": "/assets/images/Products/hydrogen_peroxide.webp",
                        "capacity": 23000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الكمامات",
                    "factory_en": "Masks Plant",
                    "factory_fr": "Usine de masques",
                    "products": [
                      {
                        "product_ar": "كمامات",
                        "product_en": "Masks",
                        "product_fr": "Masques",
                        "product_image": "/assets/images/Products/masks.webp",
                        "capacity": 0,
                        "unit_ar": "---",
                        "unit_en": "---",
                        "unit_fr": "---"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "كوم أوشيم - الفيوم",
                "location_en": "Kom Oshim - Faiyum",
                "location_fr": "Kom Oshim - Fayoum",
                "governorate_ar": "الفيوم",
                "governorate_en": "Faiyum",
                "governorate_fr": "Fayoum",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع إنتاج الشبه السائلة والصلبة (1)",
                    "factory_en": "Liquid and Solid Alum Production Plant (1)",
                    "factory_fr": "Usine de production d'alun liquide et solide (1)",
                    "products": [
                      {
                        "product_ar": "شبة سائلة / شبة صلبة",
                        "product_en": "Liquid alum / Solid alum",
                        "product_fr": "Alun liquide / Alun solide",
                        "product_image": "/assets/images/Products/alum.webp",
                        "capacity": 350000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الشبه السائلة (2)",
                    "factory_en": "Liquid Alum Production Plant (2)",
                    "factory_fr": "Usine de production d'alun liquide (2)",
                    "products": [
                      {
                        "product_ar": "شبة سائلة",
                        "product_en": "Liquid alum",
                        "product_fr": "Alun liquide",
                        "product_image": "/assets/images/Products/alum.webp",
                        "capacity": 25000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الكبريتيك المركز (1)",
                    "factory_en": "Concentrated Sulfuric Acid Production Plant (1)",
                    "factory_fr": "Usine de production d'acide sulfurique concentré (1)",
                    "products": [
                      {
                        "product_ar": "حامض كبريتيك مركز",
                        "product_en": "Concentrated sulfuric acid",
                        "product_fr": "Acide sulfurique concentré",
                        "product_image": "/assets/images/Products/sulfuric_acid.webp",
                        "capacity": 300000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الكبريتيك المركز (2)",
                    "factory_en": "Concentrated Sulfuric Acid Production Plant (2)",
                    "factory_fr": "Usine de production d'acide sulfurique concentré (2)",
                    "products": [
                      {
                        "product_ar": "حامض كبريتيك مركز",
                        "product_en": "Concentrated sulfuric acid",
                        "product_fr": "Acide sulfurique concentré",
                        "product_image": "/assets/images/Products/sulfuric_acid.webp",
                        "capacity": 300000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج سماد أحادى سوبر فوسفات الناعم والمحبب",
                    "factory_en": "Mono Superphosphate Fine and Granulated Fertilizer Production Plant",
                    "factory_fr": "Usine de production d'engrais superphosphate mono fin et granulé",
                    "products": [
                      {
                        "product_ar": "سوبر الفوسفات الناعم والمحبب",
                        "product_en": "Fine and granulated superphosphate",
                        "product_fr": "Superphosphate fin et granulé",
                        "product_image": "/assets/images/Products/superphosphate.webp",
                        "capacity": 150000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج سماد أحادى/ثلاثى سوبر فوسفات",
                    "factory_en": "Mono/Triple Superphosphate Fertilizer Production Plant",
                    "factory_fr": "Usine de production d'engrais superphosphate mono/triple",
                    "products": [
                      {
                        "product_ar": "سماد احادي/ ثلاثي سوبر الفوسفات",
                        "product_en": "Mono/triple superphosphate fertilizer",
                        "product_fr": "Engrais superphosphate mono/triple",
                        "product_image": "/assets/images/Products/superphosphate.webp",
                        "capacity": 150000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج الأسمدة المركبة NPK و DAP",
                    "factory_en": "Compound Fertilizers NPK and DAP Production Plant",
                    "factory_fr": "Usine de production d'engrais composés NPK et DAP",
                    "products": [
                      {
                        "product_ar": "اسمدة مركبة و سماد DAP",
                        "product_en": "Compound fertilizers and DAP fertilizer",
                        "product_fr": "Engrais composés et engrais DAP",
                        "product_image": "/assets/images/Products/compound_fertilizers.webp",
                        "capacity": 100000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج سماد كبريتات البوتاسيوم",
                    "factory_en": "Potassium Sulfate Fertilizer Production Plant",
                    "factory_fr": "Usine de production d'engrais sulfate de potassium",
                    "products": [
                      {
                        "product_ar": "سلفات البوتاسيوم / حامض هيدروكلوريك",
                        "product_en": "Potassium sulfate / Hydrochloric acid",
                        "product_fr": "Sulfate de potassium / Acide chlorhydrique",
                        "product_image": "/assets/images/Products/potassium_sulfate.webp",
                        "capacity": 22000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الفوسفوريك",
                    "factory_en": "Phosphoric Acid Production Plant",
                    "factory_fr": "Usine de production d'acide phosphorique",
                    "products": [
                      {
                        "product_ar": "حامض فوسفوريك تجاري 50%",
                        "product_en": "Commercial phosphoric acid 50%",
                        "product_fr": "Acide phosphorique commercial 50%",
                        "product_image": "/assets/images/Products/phosphoric_acid.webp",
                        "capacity": 100000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "العين السخنة - السويس",
                "location_en": "Ain Sokhna - Suez",
                "location_fr": "Ain Sokhna - Suez",
                "governorate_ar": "السويس",
                "governorate_en": "Suez",
                "governorate_fr": "Suez",
                "formation_ar": "ج 3 ميد",
                "formation_en": "J 3 Med",
                "formation_fr": "J 3 Med",
                "factories": [
                  {
                    "factory_ar": "مصنع إنتاج حامض الكبريتيك المركز (1)",
                    "factory_en": "Concentrated Sulfuric Acid Production Plant (1)",
                    "factory_fr": "Usine de production d'acide sulfurique concentré (1)",
                    "products": [
                      {
                        "product_ar": "حامض الكبريتيك",
                        "product_en": "Sulfuric acid",
                        "product_fr": "Acide sulfurique",
                        "product_image": "/assets/images/Products/sulfuric_acid.webp",
                        "capacity": 570000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الكبريتيك المركز (2)",
                    "factory_en": "Concentrated Sulfuric Acid Production Plant (2)",
                    "factory_fr": "Usine de production d'acide sulfurique concentré (2)",
                    "products": [
                      {
                        "product_ar": "حامض الكبريتيك",
                        "product_en": "Sulfuric acid",
                        "product_fr": "Acide sulfurique",
                        "product_image": "/assets/images/Products/sulfuric_acid.webp",
                        "capacity": 570000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الفوسفوريك التجاري رقم (1)",
                    "factory_en": "Commercial Phosphoric Acid Production Plant No. (1)",
                    "factory_fr": "Usine de production d'acide phosphorique commercial n° (1)",
                    "products": [
                      {
                        "product_ar": "حامض الفوسفوريك",
                        "product_en": "Phosphoric acid",
                        "product_fr": "Acide phosphorique",
                        "product_image": "/assets/images/Products/phosphoric_acid.webp",
                        "capacity": 350000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الفوسفوريك التجاري رقم (2)",
                    "factory_en": "Commercial Phosphoric Acid Production Plant No. (2)",
                    "factory_fr": "Usine de production d'acide phosphorique commercial n° (2)",
                    "products": [
                      {
                        "product_ar": "حامض الفوسفوريك",
                        "product_en": "Phosphoric acid",
                        "product_fr": "Acide phosphorique",
                        "product_image": "/assets/images/Products/phosphoric_acid.webp",
                        "capacity": 350000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الفوسفوريك النقي رقم (1)",
                    "factory_en": "Pure Phosphoric Acid Production Plant No. (1)",
                    "factory_fr": "Usine de production d'acide phosphorique pur n° (1)",
                    "products": [
                      {
                        "product_ar": "حامض الفوسفوريك",
                        "product_en": "Phosphoric acid",
                        "product_fr": "Acide phosphorique",
                        "product_image": "/assets/images/Products/phosphoric_acid.webp",
                        "capacity": 50000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج حامض الفوسفوريك النقي رقم (2)",
                    "factory_en": "Pure Phosphoric Acid Production Plant No. (2)",
                    "factory_fr": "Usine de production d'acide phosphorique pur n° (2)",
                    "products": [
                      {
                        "product_ar": "حامض الفوسفوريك",
                        "product_en": "Phosphoric acid",
                        "product_fr": "Acide phosphorique",
                        "product_image": "/assets/images/Products/phosphoric_acid.webp",
                        "capacity": 50000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج سماد أحادي الأمونيوم البللوري",
                    "factory_en": "Crystalline Monoammonium Phosphate Fertilizer Production Plant",
                    "factory_fr": "Usine de production d'engrais phosphate monoammonique cristallin",
                    "products": [
                      {
                        "product_ar": "فوسفات",
                        "product_en": "Phosphate",
                        "product_fr": "Phosphate",
                        "product_image": "/assets/images/Products/phosphate.webp",
                        "capacity": 90000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع سماد محبب DAP",
                    "factory_en": "Granulated DAP Fertilizer Plant",
                    "factory_fr": "Usine d'engrais DAP granulé",
                    "products": [
                      {
                        "product_ar": "DAP",
                        "product_en": "DAP",
                        "product_fr": "DAP",
                        "product_image": "/assets/images/Products/dap.webp",
                        "capacity": 225000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع سماد ثلاثي سوبر فوسفات المحبب",
                    "factory_en": "Granulated Triple Superphosphate Fertilizer Plant",
                    "factory_fr": "Usine d'engrais superphosphate triple granulé",
                    "products": [
                      {
                        "product_ar": "فوسفات",
                        "product_en": "Phosphate",
                        "product_fr": "Phosphate",
                        "product_image": "/assets/images/Products/phosphate.webp",
                        "capacity": 570000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "أبو رواش كم 28 القاهرة/ إسكندرية الصحراوي",
              "governorate": "الجيزة"
            },
            "units": [
              {
                "unit_name": "مجمع الصناعات الكيمائية بأبو رواش (25 مصنع)",
                "location": "أبو رواش كم 28 طر القاهرة / إسكندرية",
                "governorate": "الجيزة"
              },
              {
                "unit_name": "مجمع الصناعات الكيمائية بالفيوم (9 مصنع)",
                "location": "المرحلة الثالثة المنطقة الصناعية بكوم أوشيم",
                "governorate": "الفيوم"
              },
              {
                "unit_name": "مجمع إنتاج الأسمدة الفوسفاتية والمركبة (9 مصنع)",
                "location": "المنطقة الصناعية الأولى كم 80 طر القاهرة / العين السخنة",
                "governorate": "السويس"
              },
              {
                "unit_name": "مجمع إنتاج الأسمدة الأزوتية (6 مصنع)",
                "location": "المنطقة الصناعية الأولى كم 80 طر القاهرة / العين السخنة",
                "governorate": "السويس"
              }
            ]
          },
          "number_of_factories": 48
        },
        {
          "id": 2,
          "ar": "شركة العريش للأسمنت",
          "en": "Al Arish Cement Company",
          "fr": "Société cimentière d'Al Arish",
          "logo": "/assets/images/companies_logo/Cement_Aresh.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/elAresh/225.webp",
                "title": "مصنع الاسمنت",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/elAresh/122.webp",
                "title": "مصنع الاسمنت",
                "description": "خطوط إنتاج متطورة بطاقات إنتاجية عالية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/elAresh/paper.webp",
                "title": "مصنع الأكياس الورقية",
                "description": "معامل متقدمة لضمان أعلى معايير الجودة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/elAresh/00.webp",
                "title": " مصنع تدوير الرخام بمنطقة شق الثعابن",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              }
            ],
            "establishment_year": "2010",
            "description_ar": "أنشئت الشركة عام 2010 بهدف توفير احتياجات القوات المسلحة من الصناعات التعدينية (أسمنت - صلب) وتوجيه الفائض للقطاع المدني العام/الخاص وكذلك التصدير للخارج بجانب منع الاحتكار وعدم المضاربة بالأسعار وتوفير فرص عمل (مباشرة / غير مباشرة) وخاصة بوسط وشمال سيناء وتنمية المناطق التي بها المصانع وتقديم الخدمات الاجتماعية والدعم الطبي والمساعدات اللازمة لأهالي المنطقة طبقاً للإمكانيات المتيسرة.",
            "description_en": "The company was established in 2010 to provide the Armed Forces' needs for mining industries (cement - gypsum) and direct the surplus to the public/private civil sector as well as export abroad, in addition to preventing monopoly and price speculation, providing job opportunities (direct/indirect), especially in central and northern Sinai, developing areas with factories, and providing social services, medical support and necessary assistance to the people of the region according to available capabilities.",
            "description_fr": "La société a été créée en 2010 pour répondre aux besoins des Forces armées en industries minières (ciment - gypse) et diriger l'excédent vers le secteur civil public/privé ainsi qu'à l'exportation, en plus de prévenir le monopole et la spéculation sur les prix, de fournir des opportunités d'emploi (directes/indirectes), en particulier dans le centre et le nord du Sinaï, de développer les zones où se trouvent les usines et de fournir des services sociaux, un soutien médical et une assistance nécessaire à la population de la région selon les capacités disponibles.",
            "products": ["الأسمنت", "الجبس", "الطوب"],
            "contact": {
              "address": "منطقة جبل لبني - الطريق الأوسط وسط سيناء",
              "phone": "068/3570251 - 068/3570252",
              "fax": "068/3570253",
              "email": ""
            },
            "locations": [
              {
                "location_ar": "إمتداد رمسيس (2) العباسية",
                "location_en": "Ramsis Extension (2) Abbasia",
                "location_fr": "Prolongement Ramsis (2) Abbasia",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "جنوب العريش بمسافة (68) كم - الطريق الأوسطي - جبل لبني",
                "location_en": "South of Arish, 68 km - Middle Road - Jabal Labni",
                "location_fr": "Sud d'Arish, à 68 km - Route du Milieu - Jabal Labni",
                "governorate_ar": "شمال سيناء",
                "governorate_en": "North Sinai",
                "governorate_fr": "Sinaï du Nord",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "مجمع مصانع الأسمنت",
                    "factory_en": "Cement Factories Complex",
                    "factory_fr": "Complexe des usines de ciment",
                    "products": [
                      {
                        "product_ar": "أسمنت بورتلاندي (52,5 -42,5 - 32,5 - 22,5) + أسمنت محسن لخواص التربة",
                        "product_en": "Portland Cement (52.5 - 42.5 - 32.5 - 22.5) + Soil-improving Cement",
                        "product_fr": "Ciment Portland (52,5 - 42,5 - 32,5 - 22,5) + Ciment améliorant les propriétés du sol",
                        "product_image": "/assets/images/Products/cement.webp",
                        "capacity": 6500000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الشكائر الورقية",
                    "factory_en": "Paper Bags Factory",
                    "factory_fr": "Usine de sacs en papier",
                    "products": [
                      {
                        "product_ar": "شكائر تعبئة الأسمنت",
                        "product_en": "Cement packaging bags",
                        "product_fr": "Sacs d'emballage de ciment",
                        "product_image": "/assets/images/comp_factories/elAresh/DSC01175.webp",
                        "capacity": 72000000,
                        "unit_ar": "شيكارة/عام",
                        "unit_en": "bags/year",
                        "unit_fr": "sacs/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الطوب الأسمنتي",
                    "factory_en": "Cement Brick Factory",
                    "factory_fr": "Usine de briques de ciment",
                    "products": [
                      {
                        "product_ar": "طوب أسمنتي مقاسات مختلفة",
                        "product_en": "Cement bricks of different sizes",
                        "product_fr": "Briques de ciment de différentes tailles",
                        "product_image": "/assets/images/Products/cement_bricks.webp",
                        "capacity": 10000000,
                        "unit_ar": "طوبة/عام",
                        "unit_en": "bricks/year",
                        "unit_fr": "briques/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع أسمنت محسن للتربة بالرودسيم",
                    "factory_en": "Rodosil Soil-Improving Cement Factory",
                    "factory_fr": "Usine de ciment améliorant le sol Rodosil",
                    "products": [
                      {
                        "product_ar": "أسمنت محسن لخواص التربة",
                        "product_en": "Soil-improving cement",
                        "product_fr": "Ciment améliorant les propriétés du sol",
                        "product_image": "/assets/images/Products/soil_cement.webp",
                        "capacity": 600000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "إمتداد رمسيس (2) العباسية",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مجمع مصانع الأسمنت",
                "location": "جنوب العريش بمسافة (68) كم - جبل لبني",
                "governorate": "شمال سيناء"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 3,
          "ar": "شركة صلب مصر",
          "en": "Egypt Steel Company",
          "fr": "Société Sidérurgique d'Égypte",
          "logo": "/assets/images/companies_logo/solb misr1.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/solpMasr/1.webp",
                "title": "مصنع الدرفلة",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/solpMasr/2.webp",
                "title": "مصنع الدرفلة",
                "description": "خطوط إنتاج متطورة بطاقات إنتاجية عالية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/solpMasr/3.webp",
                "title": "مصنع الدرفلة",
                "description": "معامل متقدمة لضمان أعلى معايير الجودة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/solpMasr/4.webp",
                "title": "مصنع الدرفلة",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/solpMasr/5.webp",
                "title": "مصنع الدرفلة",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              }
            ],
            "establishment_year": "2016",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 1997 وضمت لجهاز مشروعات الخدمة الوطنية عام 2016 لتلبية احتياجات السوق المحلي من حديد التسليح. تقوم الشركة بكافة مراحل إنتاج حديد التسليح وحديد البلاطة والبيليت وخردة الحديد وتبلغ طاقة الشركة الإنتاجية 1.5 مليون طن / سنوياً من حديد التسليح.",
            "description_en": "An Egyptian joint stock company established in 1997 and joined the National Service Projects Organization in 2016 to meet the local market's needs for rebar. The company carries out all stages of production of rebar, billets, and scrap iron, and its production capacity is 1.5 million tons annually of rebar.",
            "description_fr": "Une société égyptienne par actions créée en 1997 et rejoignant l'Organisation des projets de service national en 2016 pour répondre aux besoins du marché local en acier à béton. L'entreprise effectue toutes les étapes de production d'acier à béton, de billettes et de ferraille, et sa capacité de production est de 1,5 million de tonnes par an d'acier à béton.",
            "products": [
              "حديد التسليح",
              "حديد البلاطة",
              "البيليت",
              "خردة الحديد"
            ],
            "contact": {
              "address": "قطعة EoAA - المعصرة - حلوان",
              "phone": " 24862370 - 24862371 - 24862372 ",
              "fax": "",
              "email": " info@solbmisr.com"
            },
            "headquarter": {
              "address": "الأدبية- عتاقة- قطعة 4588 طر مصر/ إيران",
              "governorate": "السويس"
            },
            "units": [
              {
                "unit_name": "مجمع مصانع الشركة",
                "location": "الأدبية- عتاقة- قطعة 4588 طر مصر/ إيران",
                "governorate": "السويس"
              },
              {
                "unit_name": "مقر فرعي",
                "location": "وحدة 5 قطعة 116-118 التجمع الخامس",
                "governorate": "القاهرة"
              }
            ]
          },
          "number_of_factories": 3
        },
        {
          "id": 4,
          "ar": "الشركة الوطنية للأسمنت ببنى سويف",
          "en": "National Cement Company in Beni Suef",
          "fr": "Société nationale de ciment à Beni Suef",
          "logo": "/assets/images/companies_logo/Copy of New Logo.webp",
          "link":"www.nccegypt.com",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/asmant-watanya/2.webp",
                "title": "مصنع الاسمنت",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/asmant-watanya/3.webp",
                "title": "مصنع الاسمنت",
                "description": "خطوط إنتاج متطورة بطاقات إنتاجية عالية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/asmant-watanya/4.webp",
                "title": "مصنع الاسمنت",
                "description": "معامل متقدمة لضمان أعلى معايير الجودة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/asmant-watanya/5.webp",
                "title": "مصنع الاسمنت",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "أنشئت الشركة عام 2018 بهدف تأمين الاحتياجات الاستراتيجية لمصر من الأسمنت وتلبية مطالب النهضة العمرانية وتحقيق توازن في الأسعار وربح عادل لمصانع الأسمنت والاستثمارات القائمة في هذا المجال وتوفير الآلاف من فرص العمل المباشرة وغير المباشرة ببناء الصعيد.",
            "description_en": "Established in 2018 to secure Egypt's strategic needs for cement, meet the demands of the urban renaissance, achieve price balance and fair profit for cement factories and existing investments in this field, and provide thousands of direct and indirect job opportunities in building Upper Egypt.",
            "description_fr": "Créée en 2018 pour sécuriser les besoins stratégiques de l'Égypte en ciment, répondre aux demandes de la renaissance urbaine, atteindre l'équilibre des prix et un profit équitable pour les usines de ciment et les investissements existants dans ce domaine, et fournir des milliers d'opportunités d'emploi directes et indirectes dans la construction de la Haute-Égypte.",
            "products": ["خام الأسمنت"],
            "contact": {
              "address": "مدينة السلام – القاهرة",
              "phone": "02/22806076 - 02/22806078 - 02/22806082",
              "fax": "02/22806077",
              "email": "info@nccegypt.com"
            },
            "headquarter": {
              "address": "برج رقم (5) / أبراج زهراء مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مجمع الأسمنت ببنى سويف (6 خط إنتاج)",
                "location": "بياض العرب (2/31) المنطقة الصناعية",
                "governorate": "بنى سويف"
              },
              {
                "unit_name": "مصنع الشكائر الورقية (2 خط إنتاج)",
                "location": "بياض العرب (2/31) المنطقة الصناعية",
                "governorate": "بنى سويف"
              }
            ],

            "locations": [
              {
                "location_ar": "برج رقم (5) / أبراج زهراء مدينة نصر",
                "location_en": "Tower No. (5) / Zohour Towers, Nasr City",
                "location_fr": "Tour n° (5) / Tours Zohour, Ville Nasr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "بياض العرب (2/31) المنطقة الصناعية",
                "location_en": "Bayad Al-Arab (2/31) Industrial Zone",
                "location_fr": "Bayad Al-Arab (2/31) Zone industrielle",
                "governorate_ar": "بني سويف",
                "governorate_en": "Beni Suef",
                "governorate_fr": "Beni Suef",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مجمع الأسمنت ببني سويف",
                    "factory_en": "Cement Complex in Beni Suef",
                    "factory_fr": "Complexe de ciment à Beni Suef",
                    "products": [
                      {
                        "product_ar": "كلينكر بطاقة (10.9) مليون طن ينتج منه أسمنت بطاقة (12) مليون طن",
                        "product_en": "Clinker with capacity (10.9) million tons, producing cement with capacity (12) million tons",
                        "product_fr": "Clinker d'une capacité de (10,9) millions de tonnes, produisant du ciment d'une capacité de (12) millions de tonnes",
                        "product_image": "/assets/images/comp_factories/asmant-watanya/0.webp",
                        "capacity": 12000000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الشكائر",
                    "factory_en": "Bags Factory",
                    "factory_fr": "Usine de sacs",
                    "products": [
                      {
                        "product_ar": "شكائر تعبئة الأسمنت",
                        "product_en": "Cement packaging bags",
                        "product_fr": "Sacs d'emballage de ciment",
                        "product_image": "/assets/images/comp_factories/asmant-watanya/0.webp",
                        "capacity": 200000000,
                        "unit_ar": "شيكارة/عام",
                        "unit_en": "bags/year",
                        "unit_fr": "sacs/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },

          "number_of_factories": 5
        },
        {
          "id": 5,
          "ar": "الشركة الوطنية المصرية للتطوير والتنمية الصناعية بالروبيكى",
          "en": "National Egyptian Company for Industrial Development in Robeiki",
          "fr": "Société nationale égyptienne de développement industriel à Robeiki",
          "logo": "/assets/images/companies_logo/Ropiki.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/robeky/1.webp",
                "title": "مصنع الاثاث الخشبى",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/robeky/3.webp",
                "title": "مصنع الخوذة والسترة الواقية",
                "description": "خطوط إنتاج متطورة بطاقات إنتاجية عالية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/robeky/4.webp",
                "title": "مصنع الزوى",
                "description": "معامل متقدمة لضمان أعلى معايير الجودة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/robeky/6.webp",
                "title": "مصنع الغزل الرفيع",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/robeky/7.webp",
                "title": "مصنع الغزل السميك ",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/robeky/8.webp",
                "title": " مصنع تدوير الرخام بمنطقة شق الثعابن",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/robeky/9.webp",
                "title": "مصنع النسيج الدائرى ",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2019، لخدمة قطاعات جديدة مثل المنسوجات وقطاع الأثاث المعدني والخشبي وقطاع المهمات الواقية للقوات المسلحة والشرطة. تنتج الشركة كافة أنواع الأقشمة وإنتاج وتصنيع المفروشات والأقمشة بكافة أنواعها وإنتاج وتصنيع الملابس الجاهزة بأنواعها وإنتاج وتصنيع كافة المستلزمات الأمنية والعسكرية (سترات واقية - خوذ - بدلة قتالية - إبرةولات - مهمات واقية من الرصاص والصدمات - أحذية) وتصنيع وتجهيز كافة أنواع المهمات والأثاث الخشبي والمعدني بغرض التصدير وتصنيع كافة أنواع الجوارب.",
            "description_en": "An Egyptian joint stock company established in 2019 to serve new sectors such as textiles, metal and wooden furniture, and protective gear for the Armed Forces and Police. The company produces all types of fabrics, manufacturing furnishings and fabrics of all kinds, producing and manufacturing ready-made clothing of all types, producing and manufacturing all security and military supplies (protective vests - helmets - combat suits - overalls - bullet and impact protective gear - shoes), and manufacturing and preparing all types of equipment and wooden and metal furniture for export, and manufacturing all types of socks.",
            "description_fr": "Une société égyptienne par actions créée en 2019 pour servir de nouveaux secteurs tels que le textile, les meubles métalliques et en bois, et les équipements de protection pour les Forces armées et la Police. L'entreprise produit tous types de tissus, fabrique des meubles et tissus de toutes sortes, produit et fabrique des vêtements prêts-à-porter de tous types, produit et fabrique toutes les fournitures de sécurité et militaires (gilets pare-balles - casques - combinaisons de combat - combinaisons - équipements de protection contre les balles et les chocs - chaussures), et fabrique et prépare tous types d'équipements et de meubles en bois et métalliques pour l'exportation, et fabrique tous types de chaussettes.",
            "products": [
              "الأقمشة والمنسوجات",
              "المفروشات",
              "الملابس الجاهزة",
              "المستلزمات الأمنية والعسكرية",
              "السترات الواقية",
              "الخوذ",
              "البدلات القتالية",
              "المهمات الواقية من الرصاص",
              "الأثاث الخشبي والمعدني",
              "الجوارب"
            ],
            "contact": {
              "address": "المدينة الصناعية بالروبيكي تقاطع طريق جنيفة مع المحور الفرنسي - القاهرة",
              "phone": "",
              "fax": "",
              "email": "info@encid.com.eg"
            },
            "headquarter": {
              "address": "داخل المنطقة الصناعية بالروبيكي",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "عدد (11) مصنع",
                "location": "داخل المنطقة الصناعية بالروبيكي",
                "governorate": "القاهرة "
              }
            ],
            "locations": [
              {
                "location_ar": "المنطقة الصناعية بالروبيكي - طريق جنيفة - تقاطع الدائري الإقليمي",
                "location_en": "Industrial Zone in Robeiki - Geneifa Road - Regional Ring Road Intersection",
                "location_fr": "Zone industrielle de Robeiki - Route de Geneifa - Intersection de la rocade régionale",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع الغزل السميك",
                    "factory_en": "Coarse Spinning Factory",
                    "factory_fr": "Usine de filage épais",
                    "products": [
                      {
                        "product_ar": "غزل سميك",
                        "product_en": "Coarse yarn",
                        "product_fr": "Fil épais",
                        "product_image": "/assets/images/Products/yarn.webp",
                        "capacity": 3850,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الغزل الرفيع",
                    "factory_en": "Fine Spinning Factory",
                    "factory_fr": "Usine de filage fin",
                    "products": [
                      {
                        "product_ar": "غزل رفيع",
                        "product_en": "Fine yarn",
                        "product_fr": "Fil fin",
                        "product_image": "/assets/images/Products/fine_yarn.webp",
                        "capacity": 1500,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع تحضيرات النسيج",
                    "factory_en": "Textile Preparations Factory",
                    "factory_fr": "Usine de préparations textiles",
                    "products": [
                      {
                        "product_ar": "تحضيرات النسيج",
                        "product_en": "Textile preparations",
                        "product_fr": "Préparations textiles",
                        "product_image": "/assets/images/Products/textile_prep.webp",
                        "capacity": 18000000,
                        "unit_ar": "متر/عام",
                        "unit_en": "meters/year",
                        "unit_fr": "mètres/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع النسيج المستطيل",
                    "factory_en": "Rectangular Weaving Factory",
                    "factory_fr": "Usine de tissage rectangulaire",
                    "products": [
                      {
                        "product_ar": "نسيج مستطيل",
                        "product_en": "Rectangular fabric",
                        "product_fr": "Tissu rectangulaire",
                        "product_image": "/assets/images/Products/rectangular_fabric.webp",
                        "capacity": 7750000,
                        "unit_ar": "متر/عام",
                        "unit_en": "meters/year",
                        "unit_fr": "mètres/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع النسيج الدائري",
                    "factory_en": "Circular Weaving Factory",
                    "factory_fr": "Usine de tissage circulaire",
                    "products": [
                      {
                        "product_ar": "نسيج دائري",
                        "product_en": "Circular fabric",
                        "product_fr": "Tissu circulaire",
                        "product_image": "/assets/images/Products/circular_fabric.webp",
                        "capacity": 2550,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الصباغة والطباعة",
                    "factory_en": "Dyeing and Printing Factory",
                    "factory_fr": "Usine de teinture et d'impression",
                    "products": [
                      {
                        "product_ar": "أقمشة مصبوغة ومطبوعة",
                        "product_en": "Dyed and printed fabrics",
                        "product_fr": "Tissus teints et imprimés",
                        "product_image": "/assets/images/Products/dyed_fabric.webp",
                        "capacity": 15000000,
                        "unit_ar": "متر/عام",
                        "unit_en": "meters/year",
                        "unit_fr": "mètres/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع المشغولات الخشبية",
                    "factory_en": "Wooden Products Factory",
                    "factory_fr": "Usine de produits en bois",
                    "products": [
                      {
                        "product_ar": "مشغولات خشبية",
                        "product_en": "Wooden products",
                        "product_fr": "Produits en bois",
                        "product_image": "/assets/images/Products/wood_products.webp",
                        "capacity": 42857,
                        "unit_ar": "قطعة/عام",
                        "unit_en": "pieces/year",
                        "unit_fr": "pièces/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع المشغولات المعدنية",
                    "factory_en": "Metal Products Factory",
                    "factory_fr": "Usine de produits métalliques",
                    "products": [
                      {
                        "product_ar": "مشغولات معدنية",
                        "product_en": "Metal products",
                        "product_fr": "Produits métalliques",
                        "product_image": "/assets/images/Products/metal_products.webp",
                        "capacity": 30612,
                        "unit_ar": "قطعة/عام",
                        "unit_en": "pieces/year",
                        "unit_fr": "pièces/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع سترات واقية والخوذة القتالية",
                    "factory_en": "Protective Vests and Combat Helmet Factory",
                    "factory_fr": "Usine de gilets pare-balles et casques de combat",
                    "products": [
                      {
                        "product_ar": "سترات واقية وخوذ قتالية",
                        "product_en": "Protective vests and combat helmets",
                        "product_fr": "Gilets pare-balles et casques de combat",
                        "product_image": "/assets/images/Products/protective_gear.webp",
                        "capacity": 35000,
                        "unit_ar": "قطعة/عام",
                        "unit_en": "pieces/year",
                        "unit_fr": "pièces/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الأحذية",
                    "factory_en": "Shoes Factory",
                    "factory_fr": "Usine de chaussures",
                    "products": [
                      {
                        "product_ar": "أحذية",
                        "product_en": "Shoes",
                        "product_fr": "Chaussures",
                        "product_image": "/assets/images/Products/shoes.webp",
                        "capacity": 1350000,
                        "unit_ar": "حذاء/عام",
                        "unit_en": "pairs/year",
                        "unit_fr": "paires/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع الكرات",
                    "factory_en": "Balls Factory",
                    "factory_fr": "Usine de balles",
                    "products": [
                      {
                        "product_ar": "كرات",
                        "product_en": "Balls",
                        "product_fr": "Ballons",
                        "product_image": "/assets/images/Products/balls.webp",
                        "capacity": 3000000,
                        "unit_ar": "قطعة/عام",
                        "unit_en": "pieces/year",
                        "unit_fr": "pièces/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 6,
          "ar": "شركة حديد المصريين",
          "en": "Egyptians Steel Company",
          "fr": "Société des aciéries égyptiennes",
          "logo": "/assets/images/partners_logo/egy.webp",
          "link":"www.egyptian-steel.com",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "إنشاء مصنع للحراريات لتوفير احتياجات أفران الصهر",
                "en": "Establishing a Refractory Factory to Supply the Needs of Smelting Furnaces",
                "fr": "Création d’une usine de réfractaires pour fournir les besoins des fours de fusion"
              },
              {
                "id": 2,
                "ar": "مصنع مكورات الحديد المختزلة DRI تعتبر المكورات أحد المواد الرئيسية لإنتاج الصلب المنصهر مضافاً إلى الخردة المستوردة والمحلية، مما يساهم في تقليل استيراد الخردة وزيادة إنتاجية المصانع وفتح باب التصدير",
                "en": "DRI Iron Pellet Factory: Pellets Are One of the Main Materials for Producing Molten Steel, Added to Imported and Local Scrap, Reducing Scrap Imports, Increasing Factory Productivity, and Opening Export Opportunities",
                "fr": "Usine de granulés de fer DRI : les granulés sont l’un des matériaux principaux pour la production d’acier fondu, ajoutés à la ferraille importée et locale, réduisant les importations de ferraille, augmentant la productivité des usines et ouvrant des opportunités d’exportation"
              },
              {
                "id": 3,
                "ar": "إنشاء ورش مركزية بالتنسيق مع الشركات المصنعة لخطوط الإنتاج لتوفير قطع الغيار وإصلاح الوحدات العاطلة",
                "en": "Establishing Central Workshops in Coordination with Production Line Manufacturers to Provide Spare Parts and Repair Idle Units",
                "fr": "Création d’ateliers centraux en coordination avec les fabricants de lignes de production pour fournir des pièces détachées et réparer les unités en panne"
              },
              {
                "id": 4,
                "ar": "إنشاء مصنع لإنتاج الجير والدولوميت لتوفير أحد أهم المواد الخام اللازمة لصناعة الصلب",
                "en": "Establishing a Lime and Dolomite Factory to Provide One of the Key Raw Materials Required for Steel Production",
                "fr": "Création d’une usine de chaux et dolomite pour fournir l’une des matières premières essentielles à la production d’acier"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/metal/1.webp",
                "title": "مصنع الأسكندرية ",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/metal/2.webp",
                "title": "مصنع العين السخنة",
                "description": "خطوط إنتاج متطورة بطاقات إنتاجية عالية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/metal/3.webp",
                "title": "مصنع بني سويف",
                "description": "معامل متقدمة لضمان أعلى معايير الجودة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/metal/4.webp",
                "title": "مصنع بورسعيد",
                "description": "مستودعات واسعة بأنظمة تخزين حديثة"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2010 وضمت لجهاز مشروعات الخدمة الوطنية عام 2018 بهدف إضافة بصمة جديدة في مجال صناعة الحديد والصلب باستخدام أحدث التقنيات في العالم وتطبيق التكنولوجيا الصديقة للبيئة بجانب استخدام أحدث الأساليب العلمية والتكنولوجية في الإدارة وتطبيق معايير الحوكمة. تنتج الشركة حديد التسليح المششر ولفائف الصلب طبقاً للمواصفات المحلية والعالمية بجانب إمكانية تصنيع المواصفة المقاومة للزلازل B500DWR.",
            "description_en": "An Egyptian joint stock company established in 2010 and joined the National Service Projects Organization in 2018 to add a new footprint in the iron and steel industry using the latest technologies in the world and applying environmentally friendly technology in addition to using the latest scientific and technological methods in management and applying governance standards. The company produces ribbed rebar and steel coils according to local and international specifications, in addition to the possibility of manufacturing the earthquake-resistant specification B500DWR.",
            "description_fr": "Une société égyptienne par actions créée en 2010 et rejoignant l'Organisation des projets de service national en 2018 pour ajouter une nouvelle empreinte dans l'industrie du fer et de l'acier en utilisant les dernières technologies dans le monde et en appliquant une technologie respectueuse de l'environnement en plus d'utiliser les dernières méthodes scientifiques et technologiques dans la gestion et l'application des normes de gouvernance. L'entreprise produit des barres d'armature nervurées et des bobines d'acier selon les spécifications locales et internationales, en plus de la possibilité de fabriquer la spécification résistante aux tremblements de terre B500DWR.",
            "products": [
              "حديد التسليح المششر",
              "لفائف الصلب",
              "المواصفة المقاومة للزلازل B500DWR"
            ],
            "contact": {
              "address": "القطعة 221 - القطاع الثاني - التجمع الخامس - القاهرة الجديدة",
              "phone": "27267000 - 27267004",
              "fax": "27267009",
              "email": ""
            },
            "locations": [
              {
                "location_ar": "قطعة 221 القطاع الثاني - التجمع الخامس / القاهرة الجديدة",
                "location_en": "Plot 221, Second Sector - Fifth Settlement / New Cairo",
                "location_fr": "Parcelle 221, Secteur deux - Cinquième Agglomération / Nouveau Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "المنطقة الصناعية بالرسوة",
                "location_en": "Industrial Zone in Raswa",
                "location_fr": "Zone industrielle de Raswa",
                "governorate_ar": "بورسعيد",
                "governorate_en": "Port Said",
                "governorate_fr": "Port-Saïd",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "مصنع درفلة رقم (4)",
                    "factory_en": "Rolling Plant No. (4)",
                    "factory_fr": "Usine de laminage n° (4)",
                    "products": [
                      {
                        "product_ar": "حديد تسليح",
                        "product_en": "Reinforcing steel",
                        "product_fr": "Acier d'armature",
                        "product_image": "/assets/images/Products/rebar.webp",
                        "capacity": 165000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "ك 21 طر أسكندرية الصحراوي العامرية",
                "location_en": "Km 21 Alexandria Desert Road, Ameriya",
                "location_fr": "Km 21 Route du désert d'Alexandrie, Ameriya",
                "governorate_ar": "أسكندرية",
                "governorate_en": "Alexandria",
                "governorate_fr": "Alexandrie",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مصنع درفلة رقم (3)",
                    "factory_en": "Rolling Plant No. (3)",
                    "factory_fr": "Usine de laminage n° (3)",
                    "products": [
                      {
                        "product_ar": "حديد تسليح ولفائف",
                        "product_en": "Reinforcing steel and coils",
                        "product_fr": "Acier d'armature et bobines",
                        "product_image": "/assets/images/Products/rebar_coils.webp",
                        "capacity": 140000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "مركز أبو صالح المنطقة الصناعية",
                "location_en": "Abu Salih Center, Industrial Zone",
                "location_fr": "Centre Abu Salih, Zone industrielle",
                "governorate_ar": "بني سويف",
                "governorate_en": "Beni Suef",
                "governorate_fr": "Beni Suef",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع صهر رقم (1)",
                    "factory_en": "Smelting Plant No. (1)",
                    "factory_fr": "Usine de fusion n° (1)",
                    "products": [
                      {
                        "product_ar": "حديد بيلت",
                        "product_en": "Iron billets",
                        "product_fr": "Billettes de fer",
                        "product_image": "/assets/images/Products/billets.webp",
                        "capacity": 141725,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع درفلة رقم (1)",
                    "factory_en": "Rolling Plant No. (1)",
                    "factory_fr": "Usine de laminage n° (1)",
                    "products": [
                      {
                        "product_ar": "حديد تسليح",
                        "product_en": "Reinforcing steel",
                        "product_fr": "Acier d'armature",
                        "product_image": "/assets/images/Products/rebar.webp",
                        "capacity": 265000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "المنطقة الصناعية / شركة السويس للتنمية",
                "location_en": "Industrial Zone / Suez Development Company",
                "location_fr": "Zone industrielle / Société de développement de Suez",
                "governorate_ar": "السويس",
                "governorate_en": "Suez",
                "governorate_fr": "Suez",
                "formation_ar": "ج 3 ميد",
                "formation_en": "J 3 Med",
                "formation_fr": "J 3 Med",
                "factories": [
                  {
                    "factory_ar": "مصنع صهر رقم (2)",
                    "factory_en": "Smelting Plant No. (2)",
                    "factory_fr": "Usine de fusion n° (2)",
                    "products": [
                      {
                        "product_ar": "حديد بيلت",
                        "product_en": "Iron billets",
                        "product_fr": "Billettes de fer",
                        "product_image": "/assets/images/Products/billets.webp",
                        "capacity": 141725,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع درفلة رقم (2)",
                    "factory_en": "Rolling Plant No. (2)",
                    "factory_fr": "Usine de laminage n° (2)",
                    "products": [
                      {
                        "product_ar": "حديد تسليح",
                        "product_en": "Reinforcing steel",
                        "product_fr": "Acier d'armature",
                        "product_image": "/assets/images/Products/rebar.webp",
                        "capacity": 265000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "قطعة 221 القطاع الثانيى - التجمع الخامس",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مصنع الدرفلة ببورسعيد",
                "location": "المنطقة الصناعية بالرسوة",
                "governorate": "بورسعيد"
              },
              {
                "unit_name": "مصنع الدرفلة بالأسكندرية",
                "location": "ك 21 طر أسكندرية الصحراوى العامرية",
                "governorate": "أسكندرية"
              },
              {
                "unit_name": "مصنع الصهر ببنى سويف",
                "location": "مركز أبو صالح المنطقة الصناعية",
                "governorate": "بنى سويف"
              },
              {
                "unit_name": "مصنع الصهر بالعين السخنة",
                "location": "المنطقة الصناعية / شركة السويس للتنمية",
                "governorate": "السويس"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 7,
          "ar": "شركة جريفولز إيجيبت لمشتقات البلازما",
          "en": "Grifols Egypt for Plasma Derivatives",
          "fr": "Grifols Egypt pour les dérivés plasmatiques",
          "logo": "/assets/images/companies_logo/Grifols.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/grevolz/1.webp",
                "title": "شركة جريفولز",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/grevolz/2.webp",
                "title": "شركة جريفولز",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/grevolz/3.webp",
                "title": "شركة جريفولز",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2021",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2021 بهدف دعم النظام الصحي في مصر من خلال تحقيق الاكتفاء الذاتي للأدوية المشتقة من البلازما مع تعزيز التوسع الدولي للشركة في الشرق الأوسط وإفريقيا. تعمل الشركة على إقامة عدد 20 مركز لتجميع البلازما بمختلف محافظات الجمهورية على مرحلتين وإنشاء مصنع لفصل وتنقية وتصنيع مشتقات البلازما بالمدينة الطبية بالعاصمة الإدارية الجديدة بسعة مليون لتر سنوياً.",
            "description_en": "An Egyptian joint stock company established in 2021 to support the health system in Egypt by achieving self-sufficiency in plasma-derived medicines while enhancing the company's international expansion in the Middle East and Africa. The company is working to establish 20 plasma collection centers in various governorates of the Republic in two stages and establish a factory for separating, purifying and manufacturing plasma derivatives in the medical city in the new administrative capital with a capacity of one million liters annually.",
            "description_fr": "Une société égyptienne par actions créée en 2021 pour soutenir le système de santé en Égypte en atteignant l'autosuffisance en médicaments dérivés du plasma tout en renforçant l'expansion internationale de l'entreprise au Moyen-Orient et en Afrique. L'entreprise travaille à établir 20 centres de collecte de plasma dans divers gouvernorats de la République en deux étapes et à créer une usine de séparation, purification et fabrication de dérivés plasmatiques dans la ville médicale de la nouvelle capitale administrative avec une capacité d'un million de litres par an.",
            "products": ["مشتقات البلازما", "الأدوية المشتقة من البلازما"],
            "contact": {
              "address": "فندق توليب النرجس– شارع التسعين– التجمع الخامس - القاهرة",
              "phone": "02/26180200",
              "fax": "02/26180210",
              "email": ""
            },
            "headquarter": {
              "address": "فندق توليب النرجس - التجمع الخامس",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "فندق توليب النرجس - التجمع الخامس",
                "location_en": "Tulip Al Narges Hotel - Fifth Settlement",
                "location_fr": "Hôtel Tulip Al Narges - Cinquième Agglomération",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "المدينة الطبية بالعاصمة الإدارية الجديدة",
                "location_en": "Medical City in New Administrative Capital",
                "location_fr": "Cité médicale dans la nouvelle capitale administrative",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع البلازما",
                    "factory_en": "Plasma Factory",
                    "factory_fr": "Usine de plasma",
                    "products": [
                      {
                        "product_ar": "مشتقات بلازما الدم",
                        "product_en": "Blood plasma derivatives",
                        "product_fr": "Dérivés plasmatiques sanguins",
                        "product_image": "/assets/images/Products/plasma.webp",
                        "capacity": 1000000,
                        "unit_ar": "لتر بلازما/عام",
                        "unit_en": "liters of plasma/year",
                        "unit_fr": "litres de plasma/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 8,
          "ar": "شركة السويدي الوطنية للمشروعات الهندسية",
          "en": "El Sewedy National Engineering Projects Company",
          "fr": "Société nationale El Sewedy pour les projets d'ingénierie",
          "logo": "/assets/images/companies_logo/SWIEP.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/swidy/2.webp",
                "title": "مصنع السويدي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/swidy/3.webp",
                "title": "مصنع السويدي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/swidy/1.webp",
                "title": "مصنع السويدي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2023",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2023، بهدف توطين الصناعات بخبرات مصرية وعالمية بنسبة مكون محلي تصل إلى 70% وتعظيم الاستفادة من القدرات التصنيعية عن طريق التصدير لدول الجوار وتوطين الصناعات الاستراتيجية. تنتج الشركة معدني تغطي مساحات تصل إلى 50% للإنشاء الواحد.",
            "description_en": "An Egyptian joint stock company established in 2023 to localize industries with Egyptian and international expertise with a local component of up to 70% and maximize manufacturing capabilities through export to neighboring countries and localize strategic industries. The company produces metal covers for areas up to 50% per construction.",
            "description_fr": "Une société égyptienne par actions créée en 2023 pour localiser les industries avec une expertise égyptienne et internationale avec une composante locale allant jusqu'à 70% et maximiser les capacités de fabrication par l'exportation vers les pays voisins et localiser les industries stratégiques. L'entreprise produit des couvertures métalliques pour des surfaces allant jusqu'à 50% par construction.",
            "products": ["معدني تغطي مساحات تصل إلى 50% للإنشاء الواحد"],
            "contact": {
              "address": "القطعة 27 القطاع الأول - التجمع الخامس - القاهرة",
              "phone": "",
              "fax": "",
              "email": "tamer.nafea@elswedywatanya.com"
            },
            "headquarter": {
              "address": "التجمع الخامس",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مصنع الشركة",
                "location": "B4 م الصناعية غرب خليج السويس - عتاقة",
                "governorate": "السويس"
              }
            ],
            "locations": [
              {
                "location_ar": "قطعة رقم 27 شارع التسعين الشمالي - التجمع الخامس",
                "location_en": "Plot No. 27, 90th Street North - Fifth Settlement",
                "location_fr": "Parcelle n° 27, 90e rue nord - Cinquième Agglomération",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 9,
          "ar": "شركة ليزر أند مور لصناعة الجلود",
          "en": "Laser & More Leather Manufacturing Company",
          "fr": "Société Laser & More de fabrication de cuir",
          "logo": "/assets/images/companies_logo/leather&more.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/leaser/2.webp",
                "title": "مصنع دبغ الجلود ",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/leaser/3.webp",
                "title": "مصنع دبغ الجلود ",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/leaser/1.webp",
                "title": "مصنع دبغ الجلود ",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/leaser/4.webp",
                "title": "مصنع دبغ الجلود ",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2022",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2022 بهدف جعل مصر رائدة في صناعة الجلود العالمية. تنتج الشركة القشرة الجلدية النهائية والأسمدة العضوية الصلبة والسائلة وهي من أهم المنتجات الثانوية لإعادة تدوير نفايات الجلود وأكثر طلباً عليها هي الأسمدة والأحماض الأمينية. وتمتلك الشركة مصنع الجيلاتين الذي ينتج الجيلاتين من مصدر حيواني ونباتي للاستخدام الدوائي وإنتاج الغذاء ومصانع للكيميائيات والتي تشترك بشكل أساسي بتوريد المواد الكيميائية المستخدمة في جميع مراحل عمليات الشركة بجانب تصدير المواد الكيميائية الزائدة إلى الشركات المصنعة العالمية الأخرى.",
            "description_en": "An Egyptian joint stock company established in 2022 to make Egypt a leader in the global leather industry. The company produces the final leather crust and solid and liquid organic fertilizers, which are among the most important by-products of recycling leather waste and the most in demand are fertilizers and amino acids. The company owns a gelatin factory that produces gelatin from animal and plant sources for pharmaceutical use and food production, and chemical factories that primarily participate in supplying the chemicals used in all stages of the company's operations in addition to exporting excess chemicals to other global manufacturers.",
            "description_fr": "Une société égyptienne par actions créée en 2022 pour faire de l'Égypte un leader dans l'industrie mondiale du cuir. L'entreprise produit la croûte de cuir finale et des engrais organiques solides et liquides, qui sont parmi les sous-produits les plus importants du recyclage des déchets de cuir et les plus demandés sont les engrais et les acides aminés. L'entreprise possède une usine de gélatine qui produit de la gélatine à partir de sources animales et végétales pour usage pharmaceutique et production alimentaire, et des usines chimiques qui participent principalement à fournir les produits chimiques utilisés dans toutes les étapes des opérations de l'entreprise en plus d'exporter les excédents de produits chimiques vers d'autres fabricants mondiaux.",
            "products": [
              "القشرة الجلدية النهائية",
              "الأسمدة العضوية الصلبة والسائلة",
              "الجيلاتين",
              "المواد الكيميائية"
            ],
            "contact": {
              "address": "مدينة الروبيكي لصناعة الجلود - القاهرة",
              "phone": "02/23079857",
              "fax": "",
              "email": "info@leatherandmoreegy.com"
            },
            "locations": [
              {
                "location_ar": "الروبيكي مدينة بدر",
                "location_en": "Robeiki, Badr City",
                "location_fr": "Robeiki, Ville Badr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م ع ع",
                "formation_en": "M A A",
                "formation_fr": "M A A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  },
                  {
                    "factory_ar": "مصنع خدمة دباغة وتشطيب الجلود وإعادة تدوير المخلفات",
                    "factory_en": "Leather Tanning, Finishing and Waste Recycling Service Factory",
                    "factory_fr": "Usine de service de tannage, finition du cuir et recyclage des déchets",
                    "products": [
                      {
                        "product_ar": "جلود مدبوغة ومشطبة ومنتجات جلدية",
                        "product_en": "Tanned and finished leather and leather products",
                        "product_fr": "Cuir tanné et fini et produits en cuir",
                        "product_image": "/assets/images/Products/leather.webp",
                        "capacity": 0,
                        "unit_ar": "---",
                        "unit_en": "---",
                        "unit_fr": "---"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "الروبيكى مدينة بدر",
              "governorate": "القاهرة"
            },
            "units": []
          },
          "number_of_factories": 4
        },
        {
          "id": 10,
          "ar": "شركة أفريكا ستركشرز للخيام والأغطية التقنية الحديثة",
          "en": "Africa Structures for Modern Technical Tents and Covers",
          "fr": "Africa Structures pour les tentes et couvertures techniques modernes",
          "logo": "/assets/images/companies_logo/AfricaStructures.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/leaser/2.webp",
                "title": "مصنع الاغطية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/leaser/3.webp",
                "title": "مصنع الاغطية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/leaser/1.webp",
                "title": "مصنع الاغطية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2022",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2023 بهدف توطين صناعة الخيام والأغطية الحديثة لسد فجوة الاستيراد في هذا المجال مع فتح أسواق أفريقية للتصدير ووجود مصنع مصري وطني لهذا النوعية من المنتجات الاستراتيجية. تنتج الشركة الخيام الأكواريوم الحديثة باستخداماتها المختلفة (رياضية - تجارية - تعليمية - مخازن - منشآت مؤقتة والخيام العسكرية والاحتياجات الإعلانية المختلفة والأغطية التقنية بأنواعها) لتوفير منتجات بمواصفات حديثة بسعر منافس للمستورد وتقليل الاستيراد لهذه الأصناف وتوفير العملة والتصدير لبعض الأسواق الأفريقية وزيادة موارد العملة الصعبة.",
            "description_en": "An Egyptian joint stock company established in 2023 to localize the manufacture of modern tents and technical covers to fill the import gap in this field, open African markets for export, and have an Egyptian national factory for this type of strategic products. The company produces modern aquarium tents with their various uses (sports - commercial - educational - warehouses - temporary facilities and military tents and various advertising needs and technical covers of all kinds) to provide products with modern specifications at a competitive price to the importer, reduce imports of these items, save currency and export to some African markets and increase hard currency resources.",
            "description_fr": "Une société égyptienne par actions créée en 2023 pour localiser la fabrication de tentes modernes et de couvertures techniques afin de combler le déficit d'importation dans ce domaine, d'ouvrir des marchés africains à l'exportation et de disposer d'une usine nationale égyptienne pour ce type de produits stratégiques. L'entreprise produit des tentes aquarium modernes avec leurs diverses utilisations (sportives - commerciales - éducatives - entrepôts - installations temporaires et tentes militaires et divers besoins publicitaires et couvertures techniques de toutes sortes) pour fournir des produits avec des spécifications modernes à un prix compétitif pour l'importateur, réduire les importations de ces articles, économiser des devises et exporter vers certains marchés africains et augmenter les ressources en devises fortes.",
            "products": [
              "الخيام الأكواريوم الحديثة",
              "الخيام الرياضية",
              "الخيام التجارية",
              "الخيام التعليمية",
              "الخيام العسكرية",
              "الأغطية التقنية"
            ],
            "contact": {
              "address": "الوحدة (11) في التسعين الجنوبي - التجمع الخامس - القاهرة",
              "phone": "",
              "fax": "",
              "email": "office.structures@gmail.com"
            },
            "headquarter": {
              "address": "مدينة الرحاب - القاهرة الجديدة",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "مدينة الرحاب - القاهرة الجديدة",
                "location_en": "Rehab City - New Cairo",
                "location_fr": "Ville Rehab - Nouveau Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 11,
          "ar": "شركة مدينة اللقاحات والبايو تكنولوجي (VBC)",
          "en": "Vaccines and Biotechnology City Company (VBC)",
          "fr": "Société de la cité des vaccins et biotechnologie (VBC)",
          "logo": "/assets/images/companies_logo/UVAC-VBC_Page_2.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/bio/2.webp",
                "title": " اللقاحات والبايوتكنولوجي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/bio/3.webp",
                "title": " اللقاحات والبايوتكنولوجي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/bio/1.webp",
                "title": " اللقاحات والبايوتكنولوجي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2023",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2023 بهدف توطين صناعة اللقاحات والمستحضرات الحيوية البشرية والبيطرية بشكل متكامل الجوانب وفي إطار استراتيجية الدولة لامتلاك القدرة في هذا المجال وسد الفجوة بين الإنتاج المحلي والاستيراد والوصول إلى الاكتفاء الذاتي من تلك المستحضرات في مصر ونقل الخبرات البيولوجية. تنتج الشركة 25 مليون جرعة من اللقاحات البيطرية سنوياً و 10 مليون جرعة من اللقاحات البشرية سنوياً.",
            "description_en": "An Egyptian joint stock company established in 2023 to localize the manufacture of human and veterinary vaccines and biological preparations in an integrated manner and within the framework of the state's strategy to possess capability in this field, bridge the gap between local production and imports, achieve self-sufficiency in these preparations in Egypt, and transfer biological expertise. The company produces 25 million doses of veterinary vaccines annually and 10 million doses of human vaccines annually.",
            "description_fr": "Une société égyptienne par actions créée en 2023 pour localiser la fabrication de vaccins humains et vétérinaires et de préparations biologiques de manière intégrée et dans le cadre de la stratégie de l'État pour acquérir des capacités dans ce domaine, combler l'écart entre la production locale et les importations, atteindre l'autosuffisance en ces préparations en Égypte et transférer l'expertise biologique. L'entreprise produit 25 millions de doses de vaccins vétérinaires par an et 10 millions de doses de vaccins humains par an.",
            "products": [
              "اللقاحات البشرية",
              "اللقاحات البيطرية",
              "المستحضرات الحيوية"
            ],
            "contact": {
              "address": "مبنى I.E.U. في مصطفى زهران - شيراتون - الدور الأول - شقة 2 - القاهرة",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "منطقة المنايف / كم (98) تقاطع وصلة سرابيوم مع طريق الإسماعيلية الصحراوي",
              "governorate": "الاسماعلية"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "منطقة المنايف / كم (98) تقاطع وصلة سرابيوم مع طريق الإسماعيلية الصحراوي",
                "location_en": "Al-Manaif area / Km 98 intersection of Sarabium link with Ismailia Desert Road",
                "location_fr": "Zone d'Al-Manaif / Km 98 intersection de la liaison Sarabium avec la route du désert d'Ismaïlia",
                "governorate_ar": "الإسماعيلية",
                "governorate_en": "Ismailia",
                "governorate_fr": "Ismaïlia",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  },
                  {
                    "factory_ar": "المدينة المتكاملة للقاحات والبيوتكنولوجي",
                    "factory_en": "Integrated Vaccines and Biotechnology City",
                    "factory_fr": "Cité intégrée des vaccins et biotechnologie",
                    "products": [
                      {
                        "product_ar": "لقاحات بشرية وبيطرية",
                        "product_en": "Human and veterinary vaccines",
                        "product_fr": "Vaccins humains et vétérinaires",
                        "product_image": "/assets/images/Products/vaccines.webp",
                        "capacity": 140000000,
                        "unit_ar": "جرعة/عام",
                        "unit_en": "doses/year",
                        "unit_fr": "doses/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 6
        },
        {
          "id": 12,
          "ar": "شركة بي أي أل (PIL) ميدل إيست أند أفريكا للضمادات الطبية",
          "en": "PIL Middle East and Africa for Medical Dressings",
          "fr": "PIL Moyen-Orient et Afrique pour les pansements médicaux",
          "logo": "/assets/images/companies_logo/PIL.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/pil/1.webp",
                "title": "شركة بي أي أل (PIL) - المقر الرئيسي",
                "description": "المبنى الإداري الرئيسي للشركة"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/pil/2.webp",
                "title": "شركة بي أي أل (PIL) - خط الإنتاج",
                "description": "أحدث خطوط إنتاج الضمادات الطبية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/pil/3.webp",
                "title": "شركة بي أي أل (PIL) - مراقبة الجودة",
                "description": "مختبر مراقبة الجودة والمعايير الطبية"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/pil/4.webp",
                "title": "شركة بي أي أل (PIL) - التعبئة والتغليف",
                "description": "مرحلة التعبئة النهائية للمنتجات الطبية"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/pil/5.webp",
                "title": "شركة بي أي أل (PIL) - المستودعات",
                "description": "مستودعات التخزين المجهزة بأحدث التقنيات"
              }
            ],
            "establishment_year": "20023",
            "description_ar": "صدر قرار الإنشاء عام 2023 بهدف إنتاج الزرايع والمستلزمات الطبية ذات الاستعمال لمرة واحدة طبقاً لأعلى مستويات الجودة والسلامة وتغطية متطلبات السوق المحلي من المستلزمات الطبية بما يضمن تقليل الاستيراد بالاعتماد على منتج محلي يضاهي المنتج المستورد في الجودة بسعر تنافسي.",
            "description_en": "The establishment decision was issued in 2003 with the aim of producing disposable medical sutures and supplies according to the highest levels of quality and safety and covering the local market's needs for medical supplies, which ensures reducing imports by relying on a local product that matches the imported product in quality at a competitive price.",
            "description_fr": "La décision de création a été émise en 2003 dans le but de produire des sutures et fournitures médicales jetables selon les niveaux les plus élevés de qualité et de sécurité et de couvrir les besoins du marché local en fournitures médicales, ce qui garantit la réduction des importations en s'appuyant sur un produit local qui rivalise avec le produit importé en qualité à un prix compétitif.",
            "products": [
              "الزرايع الطبية",
              "المستلزمات الطبية ذات الاستعمال لمرة واحدة"
            ],
            "contact": {
              "address": "طريق مصر الإسماعيلية الصحراوي - الإسماعيلية",
              "phone": "",
              "fax": "",
              "email": "mohanad@primestonesgypf.com"
            },
            "locations": [
              {
                "location_ar": "1 عمارات الميثاق - مدينة نصر",
                "location_en": "1 Al-Mithaq Buildings - Nasr City",
                "location_fr": "1 Bâtiments Al-Mithaq - Ville Nasr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "106 ش جامعة الدول / المهندسين شقة 16",
                "location_en": "106 Gamet El Dowal Street / Mohandessin Apartment 16",
                "location_fr": "106 Rue Gamet El Dowal / Mohandessin Appartement 16",
                "governorate_ar": "الجيزة",
                "governorate_en": "Giza",
                "governorate_fr": "Gizeh",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "شركة PIL Egypt",
                    "factory_en": "PIL Egypt Company",
                    "factory_fr": "Société PIL Egypt",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "منطقة المنايف / كم (98) تقاطع وصلة سرابيوم مع طريق الإسماعيلية الصحراوي",
                "location_en": "Al-Manaif area / Km 98 intersection of Sarabium link with Ismailia Desert Road",
                "location_fr": "Zone d'Al-Manaif / Km 98 intersection de la liaison Sarabium avec la route du désert d'Ismaïlia",
                "governorate_ar": "الإسماعيلية",
                "governorate_en": "Ismailia",
                "governorate_fr": "Ismaïlia",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "مصنع الضمادات الطبية",
                    "factory_en": "Medical Dressings Factory",
                    "factory_fr": "Usine de pansements médicaux",
                    "products": [
                      {
                        "product_ar": "ضمادات طبية حديثة",
                        "product_en": "Modern medical dressings",
                        "product_fr": "Pansements médicaux modernes",
                        "product_image": "/assets/images/Products/medical_dressings.webp",
                        "capacity": 0,
                        "unit_ar": "---",
                        "unit_en": "---",
                        "unit_fr": "---"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "1 عمارات الميثاق - مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "شركة PIL Egypt",
                "location": "106 ش جامعة الدول / المهندسين شقة 16",
                "governorate": "الجيزة"
              },
              {
                "unit_name": "مصنع الضمادات الطبية",
                "location": "منطقة المنايف / كم (98) تقاطع وصلة سرابيوم مع طريق الإسماعيلية الصحراوي",
                "governorate": "الإسماعيلية"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 13,
          "ar": "شركة بشاي للصلب",
          "en": "Beshay Steel Company",
          "fr": "Société sidérurgique Beshay",
          "logo": "/assets/images/companies_logo/beshay.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/bashy/2.webp",
                "title": "مصنع بشاي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/bashy/3.webp",
                "title": "مصنع بشاي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/bashy/1.webp",
                "title": "مصنع بشاي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/bashy/4.webp",
                "title": "مصنع بشاي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "1948",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 1948 بهدف تلبية احتياجات السوق المحلي من الصواميل ومسامير البراغي، وتم تطوير المجموعة في نهاية الثمانينات وتوجيهها إلى المنتجات الطويلة بإنشاء أول خط درفلة إنتاج حديد التسليح. تقوم المجموعة بإنتاج حديد التسليح - ركام المعادن - القطاعات الجانبية والروابط - القضبان المصنوعة من الصلب - الغازات السائلة - الحديد المختزل المباشر - خردة الحديد.",
            "description_en": "An Egyptian joint stock company established in 1968 to meet the local market's needs for nuts and bolts, and the group was developed in the late eighties and directed towards long products by establishing the first rolling line for rebar production. The group produces rebar - metal aggregates - side sections and connections - steel bars - liquid gases - direct reduced iron - scrap iron.",
            "description_fr": "Une société égyptienne par actions créée en 1968 pour répondre aux besoins du marché local en écrous et boulons, et le groupe a été développé à la fin des années quatre-vingt et orienté vers les produits longs en créant la première ligne de laminage pour la production d'acier à béton. Le groupe produit de l'acier à béton - des agrégats métalliques - des sections latérales et des connexions - des barres d'acier - des gaz liquides - du fer réduit direct - de la ferraille.",
            "products": [
              "حديد التسليح",
              "الصواميل ومسامير البراغي",
              "ركام المعادن",
              "القطاعات الجانبية والروابط",
              "القضبان الصلب",
              "الغازات السائلة",
              "الحديد المختزل المباشر",
              "خردة الحديد"
            ],
            "contact": {
              "address": "234 طريق الشهيد، مدينة نصر، القاهرة 11471",
              "phone": "+20 2 23481300",
              "fax": "+20 2 23481333/4",
              "email": "info@beshaysteel.com"
            },
            "locations": [
              {
                "location_ar": "6 شارع فريد سميكة - مصر الجديدة",
                "location_en": "6 Farid Samika Street - Heliopolis",
                "location_fr": "6 Rue Farid Samika - Héliopolis",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "---",
                "formation_en": "---",
                "formation_fr": "---",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "95 طريق الكورنيش - برج السلسلة - الأزاريطة",
                "location_en": "95 Corniche Road - Borg El Selsela - Azarita",
                "location_fr": "95 Route de la Corniche - Borg El Selsela - Azarita",
                "governorate_ar": "الأسكندرية",
                "governorate_en": "Alexandria",
                "governorate_fr": "Alexandrie",
                "formation_ar": "---",
                "formation_en": "---",
                "formation_fr": "---",
                "factories": [
                  {
                    "factory_ar": "فرع الأسكندرية",
                    "factory_en": "Alexandria Branch",
                    "factory_fr": "Succursale d'Alexandrie",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "المنطقة الصناعية الثالثة - السادات",
                "location_en": "Third Industrial Zone - Sadat City",
                "location_fr": "Troisième zone industrielle - Ville Sadat",
                "governorate_ar": "المنوفية",
                "governorate_en": "Menoufia",
                "governorate_fr": "Menoufia",
                "formation_ar": "---",
                "formation_en": "---",
                "formation_fr": "---",
                "factories": [
                  {
                    "factory_ar": "شركة المصانع الدولية لدرفلة الصلب",
                    "factory_en": "International Factories Company for Steel Rolling",
                    "factory_fr": "Société des usines internationales pour le laminage de l'acier",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "المنطقة الصناعية الخامسة - السادات",
                "location_en": "Fifth Industrial Zone - Sadat City",
                "location_fr": "Cinquième zone industrielle - Ville Sadat",
                "governorate_ar": "المنوفية",
                "governorate_en": "Menoufia",
                "governorate_fr": "Menoufia",
                "formation_ar": "---",
                "formation_en": "---",
                "formation_fr": "---",
                "factories": [
                  {
                    "factory_ar": "الشركة المصرية الأمريكية لدرفلة الصلب",
                    "factory_en": "Egyptian American Company for Steel Rolling",
                    "factory_fr": "Société égypto-américaine pour le laminage de l'acier",
                    "products": []
                  },
                  {
                    "factory_ar": "الشركة المصرية للحديد الأسفنجي والصلب",
                    "factory_en": "Egyptian Company for Sponge Iron and Steel",
                    "factory_fr": "Société égyptienne pour le fer spongieux et l'acier",
                    "products": []
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "6 شارع فريد سميكة – مصر الجديدة",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": " فرع الأسكندرية",
                "location": "95 برج السلسلة الكورنيش - الأزاريطة",
                "governorate": "الاسكندريه"
              },
              {
                "unit_name": "شركة المصانع الدولية لدرفلة الصلب ",
                "location": "المنطقة الصناعية الثالثة – السادات",
                "governorate": "المنوفيه"
              },
              {
                "unit_name": " الشركة المصرية الأمريكية لدرفلة الصلب",
                "location": "المنطقة الصناعية الخامسة – السادات",
                "governorate": "المنوفيه"
              },
              {
                "unit_name": "الشكة المصرية للحديد الأسفنجى والصلب ",
                "location": "المنطقة الصناعية الخامسة – السادات",
                "governorate": "المنوفيه"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 14,
          "ar": "الشركة العربية العالمية للبصريات",
          "en": "Arab World Optics Company",
          "fr": "Société Arabe Mondiale d'Optique",
          "logo": "/assets/images/companies_logo/Optics2.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "تسويق منتجات الشركة في شمال / جنوب إفريقيا (كشافات - ليدات - خلايا طاقة شمسية - شاشات - ...)",
                "en": "Marketing Company Products in North / South Africa (Floodlights - LED Products - Solar Panels - Screens - ...)",
                "fr": "Commercialisation des produits de l’entreprise en Afrique du Nord / du Sud (Projecteurs - Produits LED - Panneaux solaires - Écrans - ...)"
              }
            ],
            

            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/optical/2.webp",
                "title": "العالمية للبصريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/optical/3.webp",
                "title": "العالمية للبصريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/optical/1.webp",
                "title": "العالمية للبصريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/optical/4.webp",
                "title": "العالمية للبصريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "1982",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 1982 بهدف إنتاج الأجهزة والمعدات والأنظمة البصرية في المجالين العسكري والمدني. تنتج الشركة أجهزة ومعدات كهروبصرية عالية الدقة لرفع الكفاءة القتالية من أجهزة التشويش، أجهزة الرؤية الليلية والحرارية، أجهزة إدارة النيران، أنظمة الليزر، أجهزة المراقبة والاستطلاع، ومنظومات التحكم والاشتباك عن بعد. كما تساهم في دعم القطاع المدني في مجال التكنولوجيا المتقدمة كشاشات إنارة LED الموفرة للطاقة، تركيب كاميرات مراقبة.",
            "description_en": "An Egyptian joint stock company established in 1982 with the aim of producing optical devices, equipment and systems in both military and civilian fields. The company produces high-precision electro-optical devices and equipment to enhance combat efficiency, including jamming devices, night and thermal vision devices, fire control systems, laser systems, surveillance and reconnaissance devices, and remote control and engagement systems. It also contributes to supporting the civil sector in advanced technology such as energy-saving LED lighting screens, installation of surveillance cameras.",
            "description_fr": "Une société égyptienne par actions fondée en 1982 dans le but de produire des dispositifs, équipements et systèmes optiques dans les domaines militaire et civil. L'entreprise produit des dispositifs et équipements électro-optiques de haute précision pour améliorer l'efficacité au combat, y compris des dispositifs de brouillage, des dispositifs de vision nocturne et thermique, des systèmes de contrôle de tir, des systèmes laser, des dispositifs de surveillance et de reconnaissance, et des systèmes de contrôle et d'engagement à distance. Elle contribue également à soutenir le secteur civil dans les technologies avancées telles que les écrans d'éclairage LED écoénergétiques, l'installation de caméras de surveillance.",
            "products": [
              "أجهزة التشويش",
              "أجهزة الرؤية الليلية والحرارية",
              "أجهزة إدارة النيران",
              "أنظمة الليزر",
              "أجهزة المراقبة والاستطلاع",
              "منظومات التحكم والاشتباك عن بعد",
              "شاشات إنارة LED",
              "كاميرات مراقبة"
            ],
            "contact": {
              "address": "برج رقم 5 (أمام أكاديمية الشرطة وبجوار نادى وفندق ضباط القوات المسلحة) - زهراء مدينة نصر – القاهرة",
              "phone": "02/24100220",
              "fax": "02/24100093",
              "email": "info@aioegy.com"
            },
            "headquarter": {
              "address": "11491 مدخل مدينة السلام",
              "governorate": "القاهرة"
            },
            "units": [],

            "locations": [
              {
                "location_ar": "مدينة السلام - القاهرة",
                "location_en": "Madinet El Salam - Cairo",
                "location_fr": "Madinet El Salam - Le Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "الإنتاج العسكري",
                    "factory_en": "Military Production",
                    "factory_fr": "Production Militaire",
                    "products": [
                      {
                        "product_ar": "أجهزة كهروبصرية - رؤية ليلية - ليزر - أنظمة متكاملة",
                        "product_en": "Electro-optical devices - Night vision - Laser - Integrated systems",
                        "product_fr": "Dispositifs électro-optiques - Vision nocturne - Laser - Systèmes intégrés",
                        "product_image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVGBcXGBcVFRcXFxcYFRUXFxcVFRcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFy0ZFR0rLSstKy0rKy0rLSstLS0tKy0tLS0tLSstLSsrLSstKy0tKy0rLSsrLS0rKys3KystLf/AABEIAPUAzgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABJEAABAgMEBgcFBQYEBAcAAAABAAIDBBESITFRBQYTQWFxIjKBkaGx0QcUUpLBIzNCcvBUYoKi0uFTk6OyY3PC8RUWJCVDRGT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERAhIxQf/aAAwDAQACEQMRAD8A7ioLsShaOamNaKYIBCwHJRY3WKg6X0xBl740UMxIbXpENxLWi8hYWb9rzHVEnJxI1ATbiHZtJGFKAk9tFcHT5fqpuZx7PVcUmPaBpeI7/wCCAyoqGNq6m+hcXX9yqdKaTno7iXT8cN+EPcB/K4K9U16BhPDQS4hv5jTzVdpDWCTYQHTUBpyMVgPdVed4mh2OFIjnvvrVxqcKb0qDoeC0ghuF+J3J1Nd7ZrfIMJrMsP5bTvIJiZ1+0fSgjOPKG/0XGaIUVw11se0ORaa1inlD9ShF9pcmQQGR/kb/AFrktEKJhrqI9pEqD93H+Vn9adPtQlf8GP3M/qXKaIUTIa6iPaNK/wCHH+Vn9alt9pknvZHH8Df61ySiFEyGusD2gSJOMUc4foSp8DX3R5AG2I5w4g/6VxiiFEw12s61yLjUTUPtJbu4hWkjpaXeOjHhO5RGnyK4BRCynU16HmLzUXimO5Kld68+S8ZzL2Ocw/uuLfJXclrVOw6UmHkZPo8fzVKnU12ia3JMrj2Ln2i/aBFBpGhMeM2ktPcag+C2UhpqDMNrDJDt7SKOHqOSmU1ZzOCip2Aam9SbIyUUWzGQ7lFtmuJxzQ2rs1IEIZIOOaY0Q1keJGiExIzi4OiOxpUmy0YBorTsVPHC1us4+1f+Y+KykcLqwhvCbITz00QikIqJSCgjxYtHNbZJtVvGApmnqJL3EFoDag1qa9W7HiloCojRoICQRoICohRKQVBIURoICojQojogS+IG0qQKkAVzOAT7ExFLQBaH4gBdW8m7xUmGERLlxetrqW6kZgpUGoPDouNT2gBYyWF622pv3g5HyKXwbyMKCou5Ji2cz3pyE4uNDeE9sm5Lk2LYNyTBjFH7weCcEAG+9BzbWgfaO5+qycwFrNbYjRFdUgEnDfjuGJWQmIh3Nceyn+6i6sI700Uby/4R2u9AU25r82jsJ+oQGUEgw3/H3NH1qk7E/G7+X0RRRXPDm2Wggk2iTgN1E6q+NNwmkh0V1RiKn6BSRDYQDbdQ/wDEPqoJCCjbOH8X+ofVCzC+IfOfVBJohRRbEHNvelNgwjhZPagk0QomvdGfD5oe6My8SqHUE17q3j8zvVD3Vubvnd6oHUYTQlx8T/mP1RiAfjf4HzCBUaLZANkmpAu3VNKngpMNRtm7c/vaD4CicgW6Vq3kWkfUoiylsVuNSx9q3kfIrCSznb2g8nf1ALY6lzoMVlBS9zTaBGDXYbiagC7NL4OhRGhoqMU3t3ZpTX2rj4Jfu44rk2L3cZlEI5wpwQ954eKMQN9eOCDmOnj03HAuJJpvJzO9ZiacBUlajTw6buawmlo9p9kYN811YhEacJwuUV8y7MptxTbisqN8c5nvTTnlJemXOQRZ+FfaHb6o5J5pQjD9UT9pFaRSrSFpNlyK0iH2uTjXKMHJxrkEyDHc3Aqxl5sOuNx8FTsKfYUF2hRRJOPXons9FLWgEEaAQGE6xNhOsREqXWr1UFIjaXVdfTiRisrLrV6rfes5jzCDohZZvCT7wckdu3dgh7tx8FybF7sc0oRxhTgj94HFI2JxuQcy1ldZL3H8NT3VXOnXrfa8OoH8XU73FYNwXSsww5NPT7wmHqBh6YcUJmYA58FEMRzsLkDr3JG0RMZQ3itxx3cUexCiiMUIbQZpWyGSGy4eCIJsQJ5r00GktAIw5eaTssrkE1jlIhuVa2IRiKqVBiqixhlWkF9RVU0NysJJ99M1YJiNBBUGE6xNhKgPDhUYehoiJ0utXqv96zmPMLKS61eq/wB6zmPMIOhBlm/FH7yMkHvtXDxSPdzwXJsWwcnhFGCPbNzTBhGtaIOUe0J1HUzefCvqsUVr/aM77Zo/OfELHOK6VmG4hVPMzlo2Wmgz9EekZsvNhuG/j/ZKk5OtLr1BHhS2d5U1soRe4ho4m/sCs9HyJebMOlBc6IRUDMMG8/rgtFJaMhwrwKu3ude49v0wVw1lIWjCcBEPKGQPFJi6McMxwc0t/st0icAbiKjimJrnxgEXFFsFqdLaOABe0XDcMRy4Krl5epDaG06lGi8kk0A5oqrEAnBLEg/JdM0H7O40QB0Z4gNP4QLT+3cD3rTwPZzJAdLavOZiU8GgImuExJJwpUY4KJYcCRZpzFF6Bj+zmRd1dqw5iIT/ALqrN6Z9mcVoJgRGxh8DxZd2Hqk9ymGuWysavPJWEF9L8kjSeiHw3EWXMiNxY4UPJNS0WoyIuIyKKvQao0xJvq2mSkBaBhOQmgXBNhOsREuXWr1Y+8ZzH0WUl1q9WPvGcx5hB0FjbJqcE5t2oorg4UF5TOxdkuTYtmcipTXjMJVoZqGWmuCDjvtFf/6qmTfNxWD0tN2RZGJx4BbH2jxw2bik/hA9fqsFIwXRohcVusw9o6SJvIVzBlLbhCbcSKvdvazIZE+uSlslxDbXJTtX4FIe0PWidI8B+Edgp3lXDVhLQGsaGNAAF1AnSESUtMkoAIkpqCPPmkN3G7vuUjUCT2k9DNLoYfEPYLI8Sq7TcwGhgNek6lwruWy9k0n9/G/LDHYLTv8Ac1Sq6EGIk4kErOpYJBBCiqKXWbVuFOMo8WYgHQiAXt4HNvBcK07od8tEc1zbL4dzgMHNxDhnmCvSIbmsR7UtCiJBEy0dKFc7jDcadtCa9pUajkejowJFMCP+ys1nyNjEoLmk1bwOSvmOqAc1YpYTrE0E6xVEuXWq1Y+8ZzHmFlZdarVn7xnMeYQdChChqbuaf2gzCbjmouUeyciuTYlObgEaguxKDz57Vpis/GYNzhXsaKBL0BoywwEi83oazyhj6amG4gRSTyaB9VfxmhooF0jCh04zo0BPSFnh0jSvO9aCG2gAG4Kh011K/CQe41+ivmGoB5KhSFUEFUEjBRIIKvS7iXUBpcPG8+FF1T2eSmzkYZOMQuiHjaN3gAuRviiLEc1l5tWMN5o0UzXfpGAIcNkMYMa1vygD6LNU8UgpdEKLIbojCXRCiaYJpUbS8oIsCLDP42Pb3tIUqij6TjiHBiPJoGsc75WkorzlOype2/HdTgndDxrUOhxaS0/rtUtguCjQ4ViJUYPu/iF/lVaE0JUvDDRQcT3klJCdYqiXLrVas/eM5jzCysutTq194zmPMIOhS/WUpNTHVUVcmwqc1NaLkNmMh3KI55zPeg46yV/910jEOAiWRzN5+iE0VYmHSa0ic5kj/SYfqs7pWM50ZkFpIqC95GNkGgAO6p8l1jBubhWxStL7+IySG2mgAPcALh0j6qXFZcozkCTFf8bvmd6pLYkSl73E/md6pbWkmgBJyCmyeh40V7WNb0nGgHrkEFftH/G/53eqBfEqPtHU3i0418VbzegnMmNhtWGhAc8Vsi6rscr+5R9LSGyiFjSXUArWgIJvsniARXjVAjQUWE2agbU0YIjXOJwAaagnIVAXZhrDJ/tMH/MZ6rhp43JBYTg49wUsHdTrJJftUD/Mb6pt2tUl+1QvnC4TEl3G4ur2I9k/4lMV3P8A83SP7TD7yfokHXKQ/aWdzvRcO2L/AIvEomS5H4qckwdyOukh+0D5X/0rNa865S8SXMCBEtOikNJsuADa1N5AvNKdpXN2wM3O704IY58zVMC1WRjHMZtQBCDhlU1BF+/FWSbmMB+ZvmtIeCdYmmp1iCXLrU6t/eN5jzCy0utRq5128/RB0OB1lJsjJNRhQVF3JMWzme9cmx7V2akCEMkNg3JMGMUHMo7aTOkB/wDpB+aDDWTjik46u+E2nY418wthpJjhpKeaaUeyWigb6uY5hP8AIO5ZbT0u4PZGYKuZUOAxcw404jFdIwciYJmTlto6mAGJ+gRRo4sWhvF24381aaFg2WV3m88clRMgwAwUaAP1vzWk1fl/d4EWaP3jgWQ/AV+Yj5VVy0KuK18eVAYyHua0V5hjzXvcFKRjdIyll7OjUQg0OqOs+tt9o8ST3KpnZdz3Oe68uJJ5k1W10vK/ef8AOcfAU81RxJdUZWNLEKDEZRauPKqrmZS+8IKqJCc2loY/rsSVN07CIcMr/oq1j0AjP3JlPRWplRTsF99DzH67k+osAVcTuAp2nHyUiqoUm4+A/M3zSlAmdJNtiCAS60yp3C8ILMJUuHU6Rqanurd4JDU8xES5darVltYjOY8wsvLBbLVGFWK39YJRuIZJNDeE9sm5JuI0NFRim9u7Ncmx+8HgnBABvvQ93GZSNuRdRBhdaoNjSUJwF0eXiQyf3pd4c3tsxD3LOaQh0JW19oUvZgQpsf8A1ozIjv8Alv8As4vYGur/AArN6alqOP6/X9104+M1j5/rMbma/KC76LRSxpQLPaSFIsPmR3tcB5hXMvEVRfypW9jsrbp8II7WEDxC51AiLoklGtCE/c9gHa2+ni7uWeSxVaYhAvrS5wDu8Y+aqTBFeCvNLNpDGcNxYeRvb4U8VRuKs8SmJiXFKg/VVceXG9WzlHjsqqM7pOSdStSRxKzkxCLXUIpzWynSbNFndJFxFCa0zv8AFBAruqDySTDBz7ymmG9O1UUocEdUmqCoXVIjAWXH8p7nNKMFG4Va4Ztd5FA6E/DCjwjUA50UqEEROlGrfaoQaVfkLuZu9VitHwqkLper0oGwgMCb+64KcvCLJr7VxTnu44pLmWbwk+8HILm2P3nh4oe71vr4Ivdjmlbel1EDE9CZEhvgxG2mPa5jhm1wLT4FYFkq4QNlEviSx2Lz8QaBs4vJzLJ5gjcuibGt9cb1WaQ0Y10QPFz7Ozedz2VLm14tJJH5nDetSpY49rJBLWh4F8NweP4SD9KISUcYA3C8cWkVae4haXT+jKFzSMwsPLVhksOMK7nDJuI/KSRyc3JbZa2VjreatRy+CYYNXMNtnnQ9tR/EuXS8wr7QumHQYgeL6YjMbwlg3OlIt4J+7itABI6rgai1yNe85Kkji9aZwhxYdodKFFFSfhPxcOOR7VVO0W+9rzZs3NiUq1wPVt5ZV/ssyrVSSg9gs1P6uQiw3NcWkXg0KN8GI9pLRWm4dYjMDeOS0imnBis9pAK9m3rP6QiIKY9ZO1UetXJ6qil1QBSKpQQKCRMTWzAdYc++lG/XJLCcYqC0fUsbUUNKEHcRdRWUCGSQa3X1GaYYzpfmo76HxHirbR8vUoi81ckC97RTErowZYw5U/XJUmrUjsmiIR1sM+auy63dhvWOVagW7d2CHu3HwQDLF+KP3kZLKj94GRSNgTfck7ByeEYBAQjAXX3XJDoRdeN6J0Im8b04yIGihxCCm09osRG3dcDvHquVazaJeCIsMC2zcRc4b2uG8EVFF2t7C41CodP6Eti00dLePqFuX4zY41LxgWhzeqbqG8sdvhu4jcd47VNgzVE/pvQb4bjFggVNz2EdF45Z76i8HBVEN4eCWWrusw9dnMfib+8O0BVG91S1lMAljulDN5bv42ePDettD0rDsB0H7dj6gQ23vbdeKH8OYOG6uC4ayYIU/RunYsB1uE8sOF28ZEb0siutM0Y00i1a8X2mWiGjgHG+oydTsSZ1lwayhpSkOKbDwf8AhvNx7ysVojXRpNmcBe0iltoG05PwERvA1V5L6TkiCIU4xgP4Xl8EDsNYZ+VQQ9ITbQSIrXg7xGlxE7BFY4OIVS+FKvN0IvOUKDNO8C4eav5mBLgB7tJbJuP2MdoH8kIeSqp3WHR7GGGwzE67GsaI/Z1/erQkcKFVFFpKal4YfChyth9KF72tDm13AF0RwNK/iBGSoFJn5raPLrLGV/DDYGMHBrQoyKMJQRAJxrUBtCkQmJtwstJsl1NzcTyU3RjC8VsObwdiqiTKQLVBv3duIWt0Bo0ucKC4Xk7gPqU1oDQhecLhiVvJeUa1obDFwx3VOZUtwkPUDgA26maNrbF55XIQ+jjvRxHWrgubYOfauHike7ngjY0tNSnNu1Ae2bmmDCOSTszkVKbEGYQJbEAABOCaewk1AuRPYSSQE9DcAACaIChuDRQ3FIiguNW3oorSTUXpyCaC+7mgpdL6FbEFbmu8D6Fc71g1WBdaoWRBg9txHGq65HvpS/kmIkox4IiDluPYtTkljgk3LRWfewtoPjhUD/4mHouPceKrjYd1YrR+6/7Nw4dLo9ziu1aT1WrUwyHDLeslpLV68h8MHmFr1lhPdIu5rj+XpeSSZWJvY4fmu81oY2rUL/Cb2XeSj/8AgMJuEJvcmLqobeLNuvBvT8jZ7ynmQ+FPE9p+itfcqYCiT7qmIrrCUIasWyhT0OROSuGq1kJSoUuprZR4eGiC9wP4m2aDgamvgtTovVeI++zQZlBm5TR5O5bDQWrlaOf0W+J5LRaM0FBhXu6TuOA7FZRW1Nwu4LN5LIbhywaA2GLh58U/C6ONyEA0F93NFHvpS/ksNDi9LC+iTCFk1NyOBdWt3NHHNRdfyQHFcHCgvKZ2LskqCKGpuT+0GYQKtDMKG5prgUlTm4BAmG4UF+5R4oqSkxMTzUmD1QgKAaC9NzAqbr7kmY6ydlsO1AUvdWt3NFMX0pfyRTWIRyu/s+qApe433c0c3Da4UIDuyqVNYBNy2PYgqnaBhOxBHG67wUSPqmzc8dy00x1T+t6jwesFdqYyj9UTuI7iPoo0TVKMHCjYZbvO0oR/DZNe9b6JgeRUMK9qYzEPVHMjuPorGW1VhDrOry/utIoCdqZDEHR0NnVYOdK+asobhQJTMByUSLiVlSowqTT9XJ6AaC9HA6o/W9MzGKA5gVN19yVL3VrdzRy2Hb6JM1uQHMX0pfySZe433I5XelTOA5oBHNRdeo9k5HuTkvipSAKC7EoIIJkLAclFjdYoIIH5fqpqZx7PVBBAuVwKKa3dv0QQQFK4lOTOHagggZl+sFIjdUokEEWHiOYU1yCCCArBBBBBfiealwsByQQQRo/WP63J+W6qCCBqax7EuV3oIIBNbkmVx7EEEDkzgoqCCo//2Q==",
                        "capacity": 95167,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "الإشتباك عن بعد",
                    "factory_en": "Remote Engagement",
                    "factory_fr": "Engagement à Distance",
                    "products": [
                      {
                        "product_ar": "منظومات الإشتباك عن بعد",
                        "product_en": "Remote engagement systems",
                        "product_fr": "Systèmes d'engagement à distance",
                        "product_image": "/assets/images/Products/remote_engagement.webp",
                        "capacity": 32585,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "كاميرات المراقبة",
                    "factory_en": "Surveillance Cameras",
                    "factory_fr": "Caméras de Surveillance",
                    "products": [
                      {
                        "product_ar": "كاميرات المراقبة",
                        "product_en": "Surveillance cameras",
                        "product_fr": "Caméras de surveillance",
                        "product_image": "/assets/images/Products/surveillance_cameras.webp",
                        "capacity": 28780,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "كشافات الليد",
                    "factory_en": "LED Spotlights",
                    "factory_fr": "Projecteurs LED",
                    "products": [
                      {
                        "product_ar": "كشافات الليد",
                        "product_en": "LED spotlights",
                        "product_fr": "Projecteurs LED",
                        "product_image": "/assets/images/Products/led_spotlights.webp",
                        "capacity": 25947,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "الطاقة الشمسية",
                    "factory_en": "Solar Energy",
                    "factory_fr": "Énergie Solaire",
                    "products": [
                      {
                        "product_ar": "الواح الطاقة الشمسية",
                        "product_en": "Solar panels",
                        "product_fr": "Panneaux solaires",
                        "product_image": "/assets/images/Products/solar_panels.webp",
                        "capacity": 40870,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "المشغولات الخشبية",
                    "factory_en": "Wooden Products",
                    "factory_fr": "Produits en Bois",
                    "products": [
                      {
                        "product_ar": "صناعات خشبية (أثاثات - أبواب)",
                        "product_en": "Wooden industries (furniture - doors)",
                        "product_fr": "Industries du bois (meubles - portes)",
                        "product_image": "/assets/images/Products/wooden_products.webp",
                        "capacity": 35973,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "الصناعات المعدنية",
                    "factory_en": "Metal Industries",
                    "factory_fr": "Industries Métalliques",
                    "products": [
                      {
                        "product_ar": "صناعات معدنية - شيت ميتال خاصة بفتارين المتاحف - تجهيزات العربات المدرعة - دهانات إليكتروستاتيك",
                        "product_en": "Metal industries - Sheet metal for museum showcases - Armored vehicle equipment - Electrostatic paints",
                        "product_fr": "Industries métalliques - Tôle métallique pour vitrines de musées - Équipements de véhicules blindés - Peintures électrostatiques",
                        "product_image": "/assets/images/Products/metal_industries.webp",
                        "capacity": 4956,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "الإليكترونيات",
                    "factory_en": "Electronics",
                    "factory_fr": "Électronique",
                    "products": [
                      {
                        "product_ar": "كروت إليكترونية",
                        "product_en": "Electronic cards",
                        "product_fr": "Cartes électroniques",
                        "product_image": "/assets/images/Products/electronic_cards.webp",
                        "capacity": 30870,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  },
                  {
                    "factory_ar": "العدادات الذكية",
                    "factory_en": "Smart Meters",
                    "factory_fr": "Compteurs Intelligents",
                    "products": [
                      {
                        "product_ar": "كروت العدادات الذكية (مياه - كهرباء - غاز)",
                        "product_en": "Smart meter cards (water - electricity - gas)",
                        "product_fr": "Cartes de compteurs intelligents (eau - électricité - gaz)",
                        "product_image": "/assets/images/Products/smart_meters.webp",
                        "capacity": 80605,
                        "unit_ar": "رجل/ساعة",
                        "unit_en": "man/hour",
                        "unit_fr": "homme/heure"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        }
      ]
    },
    {
      "sector_ar": "قطاع مشروعات الأمن الغذائي",
      "sector_en": "Food Security Projects Sector",
      "sector_fr": "Secteur des projets de sécurité alimentaire",
      "gradient": "from-blue-500/90 to-cyan-600/90",
      "companies": [
        {
          "id": 15,
          "ar": "مجمع إنتاج البيض المتكامل",
          "en": "Integrated Egg Production Complex",
          "fr": "Complexe intégré de production d'œufs",
          "logo": "/assets/images/companies_logo/egg1.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "إنشاء مزرعة لإنتاج البيض الخالي من مسببات الأمراض (SPF) المستخدم في الأمصال الطبية على مساحة (100) فدان بمنطقة الزعفرانة",
                "en": "Establishment of a Specific Pathogen-Free (SPF) Egg Production Farm for Medical Vaccines and Sera on an Area of 100 Feddans in Al-Zaafarana",
                "fr": "Création d’une ferme de production d’œufs exempts d’agents pathogènes spécifiques (SPF) destinés aux vaccins et sérums médicaux sur une superficie de 100 feddans à Al-Zaafarana"
              },
              {
                "id": 2,
                "ar": "استثمار عدد (200) فدان خلف المقر الحالي لمجمع البيض بطريق القاهرة / بلبيس كاستثمار زراعي أو مشروع لتربية الدواجن",
                "en": "Investment of 200 Feddans Behind the Current Egg Complex Headquarters on Cairo / Belbeis Road for Agricultural Investment or Poultry Farming Project",
                "fr": "Investissement de 200 feddans derrière le siège actuel du complexe d’œufs sur la route Le Caire / Belbeis pour un projet agricole ou d’élevage avicole"
              }
            ],
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/egg/1.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/egg/2.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/egg/3.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/egg/4.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/egg/5.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/egg/6.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/egg/7.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/egg/8.webp",
                "title": "مجمع إنتاج البيض المتكامل",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "name_ar": "مجمع إنتاج البيض المتكامل ووحداته",
            "establishment_year": "1983",
            "description_ar": "أنشئ المجمع عام 1981 بهدف تحقيق الاكتفاء الذاتي من بيض المائدة لصالح القوات المسلحة وطرح الفائض للقطاع المدني بسعر أقل من مثيلاته في السوق. ينتج المجمع بيض المائدة الطازج (أورجانيك) بأعلاف نباتية بنوعية جيدة وبأسعار اقتصادية أقل من السوق المحلي تحت إشراف طبي طوال فترة الإنتاج.",
            "description_en": "Complex established in 1981 to achieve self-sufficiency in table eggs for the Armed Forces and offer surplus to the civil sector at a price lower than its counterparts in the market. The complex produces fresh table eggs (organic) with plant-based feed of good quality and at economic prices lower than the local market under medical supervision throughout the production period.",
            "description_fr": "Complexe créé en 1981 pour réaliser l'autosuffisance en œufs de table pour les Forces armées et offrir l'excédent au secteur civil à un prix inférieur à ses homologues sur le marché. Le complexe produit des œufs de table frais (biologiques) avec des aliments à base de plantes de bonne qualité et à des prix économiques inférieurs au marché local sous supervision médicale tout au long de la période de production.",
            "products": ["بيض المائدة الطازج", "بيض أورجانيك"],
            "contact": {
              "address": "طريق مصر بلبيس الصحراوي بجوار شركة كربازي هليوبوليس - الشرقية",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "كم 6 طريق بلبيس / القاهرة الصحراوي",
              "governorate": "الشرقية"
            },
            "units": [
              {
                "unit_name": "وحدة إنتاج البيض رقم (1)",
                "location": "طريق بلبيس الصحراوي- أنشاص",
                "governorate": "الشرقية"
              },
              {
                "unit_name": "وحدة إنتاج البيض رقم (2)",
                "location": "وادي الملاك بجوار الفرقة 6 م",
                "governorate": "الإسماعيلية"
              },
              {
                "unit_name": "وحدة إنتاج البيض رقم (3)",
                "location": "التل الكبير",
                "governorate": "الإسماعيلية"
              },
              {
                "unit_name": "وحدة إنتاج البيض رقم (4)",
                "location": "وادي الملاك بجوار الفرقة 6 م",
                "governorate": "الإسماعيلية"
              }
            ],
            "locations": [
              {
                "location_ar": "كم 6 طريق بلبيس / القاهرة الصحراوي - طريق بلبيس الصحراوي- أنشاص",
                "location_en": "Km 6 Belbeis / Cairo Desert Road - Belbeis Desert Road - Anshas",
                "location_fr": "Km 6 Route du désert Belbeis / Le Caire - Route du désert de Belbeis - Anshas",
                "governorate_ar": "الشرقية",
                "governorate_en": "Sharqia",
                "governorate_fr": "Charqia",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "قيادة مجمع البيض",
                    "factory_en": "Egg Complex Command",
                    "factory_fr": "Commandement du complexe d'œufs",
                    "products": [
                      {
                        "product_ar": "بيض مائدة (أبيض - أحمر)",
                        "product_en": "Table eggs (white - red)",
                        "product_fr": "Œufs de table (blanc - rouge)",
                        "product_image": "/assets/images/Products/eggs.webp",
                        "capacity": 60000000,
                        "unit_ar": "بيضة/عام",
                        "unit_en": "eggs/year",
                        "unit_fr": "œufs/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "وحدة إنتاج البيض رقم (1)",
                    "factory_en": "Egg Production Unit No. (1)",
                    "factory_fr": "Unité de production d'œufs n° (1)",
                    "products": [
                      {
                        "product_ar": "بيض مائدة (أبيض - أحمر)",
                        "product_en": "Table eggs (white - red)",
                        "product_fr": "Œufs de table (blanc - rouge)",
                        "product_image": "/assets/images/Products/eggs.webp",
                        "capacity": 15000000,
                        "unit_ar": "بيضة/عام",
                        "unit_en": "eggs/year",
                        "unit_fr": "œufs/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "مدينة الشروق",
                "location_en": "Al-Shorouk City",
                "location_fr": "Ville d'Al-Shorouk",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "وحدة إنتاج البيض رقم (2)",
                    "factory_en": "Egg Production Unit No. (2)",
                    "factory_fr": "Unité de production d'œufs n° (2)",
                    "products": [
                      {
                        "product_ar": "بيض مائدة (أبيض - أحمر)",
                        "product_en": "Table eggs (white - red)",
                        "product_fr": "Œufs de table (blanc - rouge)",
                        "product_image": "/assets/images/Products/eggs.webp",
                        "capacity": 15000000,
                        "unit_ar": "بيضة/عام",
                        "unit_en": "eggs/year",
                        "unit_fr": "œufs/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "وحدة إنتاج البيض رقم (4)",
                    "factory_en": "Egg Production Unit No. (4)",
                    "factory_fr": "Unité de production d'œufs n° (4)",
                    "products": [
                      {
                        "product_ar": "بيض مائدة (أبيض - أحمر)",
                        "product_en": "Table eggs (white - red)",
                        "product_fr": "Œufs de table (blanc - rouge)",
                        "product_image": "/assets/images/Products/eggs.webp",
                        "capacity": 15000000,
                        "unit_ar": "بيضة/عام",
                        "unit_en": "eggs/year",
                        "unit_fr": "œufs/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "التل الكبير",
                "location_en": "Al-Tal Al-Kabir",
                "location_fr": "Al-Tal Al-Kabir",
                "governorate_ar": "الإسماعيلية",
                "governorate_en": "Ismailia",
                "governorate_fr": "Ismaïlia",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "وحدة إنتاج البيض رقم (3)",
                    "factory_en": "Egg Production Unit No. (3)",
                    "factory_fr": "Unité de production d'œufs n° (3)",
                    "products": [
                      {
                        "product_ar": "بيض مائدة (أبيض - أحمر)",
                        "product_en": "Table eggs (white - red)",
                        "product_fr": "Œufs de table (blanc - rouge)",
                        "product_image": "/assets/images/Products/eggs.webp",
                        "capacity": 15000000,
                        "unit_ar": "بيضة/عام",
                        "unit_en": "eggs/year",
                        "unit_fr": "œufs/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 25
        },
        {
          "id": 16,
          "ar": "الشركة الوطنية للصناعات الغذائية والتوريدات العمومية (بسيناء)",
          "en": "National Food Industries and Public Supplies Company (in Sinai)",
          "fr": "Société nationale des industries alimentaires et des approvisionnements publics (au Sinaï)",
          "logo": "/assets/images/companies_logo/sinai.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/sinai/1.webp",
                "title": "مصنع المخللات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/sinai/2.webp",
                "title": " مصنع زيت الزيتون",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/sinai/3.webp",
                "title": "الشركة الوطنية للصناعات الغذائية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/sinai/4.webp",
                "title": "الشركة الوطنية للصناعات الغذائية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "1994",
            "description_ar": "أنشئت الشركة عام 1994 بمحافظة شمال سيناء بهدف المساهمة في تنمية وإعمار سيناء واستغلال إنتاج المنطقة من الزيتون. تعمل الشركة في مجال إنتاج وتعبئة زيت الزيتون البكر الممتاز بنسبة حموضة أقل من 0.8% طبقا للمواصفات القياسية المصرية وإنتاج وتعبئة جميع أنواع المخللات.",
            "description_en": "Established in 1996 in North Sinai Governorate to contribute to the development and reconstruction of Sinai and utilize the region's olive production. The company works in producing and packaging extra virgin olive oil with acidity less than 0.8% according to Egyptian standard specifications and producing and packaging all types of pickles.",
            "description_fr": "Créée en 1996 dans le gouvernorat du Nord-Sinaï pour contribuer au développement et à la reconstruction du Sinaï et utiliser la production d'olives de la région. L'entreprise travaille dans la production et l'emballage d'huile d'olive extra vierge avec une acidité inférieure à 0,8 % selon les spécifications standard égyptiennes et la production et l'emballage de tous types de cornichons.",
            "products": ["زيت الزيتون البكر الممتاز", "المخللات"],
            "contact": {
              "address": "إنشائع محمود طعت - شارع الطيران - مدينة نصر - القاهرة",
              "phone": " 02-22626724",
              "fax": "02-22626724",
              "email": ""
            },
            "headquarter": {
              "address": "12 شارع محمود طلعت - مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مصنع النوبارية",
                "location": "مزرعة 6 أكتوبر / قطاع الأمن الغذائي",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مصنع زيت الزيتون",
                "location": "ميت ياميت - قرية ابو شنار (متوقف)",
                "governorate": "شمال سيناء"
              },
              {
                "unit_name": "مصنع المربى والعصائر",
                "location": "ميت ياميت - قرية ابو شنار (متوقف)",
                "governorate": "شمال سيناء"
              },
              {
                "unit_name": "مصنع إنتاج المخللات",
                "location": "ميت ياميت - قرية ابو شنار (متوقف)",
                "governorate": "شمال سيناء"
              },
              {
                "unit_name": "مزرعة رفح",
                "location": "ميت ياميت - قرية ابو شنار (متوقف)",
                "governorate": "شمال سيناء"
              }
            ],
            "locations": [
              {
                "location_ar": "12 شارع محمود طلعت - مدينة نصر",
                "location_en": "12 Mahmoud Talat Street - Nasr City",
                "location_fr": "12 Rue Mahmoud Talat - Ville Nasr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "قري أبو شنار - مدينة رفح",
                "location_en": "Abu Shanar Village - Rafah City",
                "location_fr": "Village d'Abu Shanar - Ville de Rafah",
                "governorate_ar": "شمال سيناء",
                "governorate_en": "North Sinai",
                "governorate_fr": "Sinaï du Nord",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "مصنع الصلصة والمربى",
                    "factory_en": "Sauce and Jam Factory",
                    "factory_fr": "Usine de sauces et confitures",
                    "products": [
                      {
                        "product_ar": "صلصة ومربى",
                        "product_en": "Sauce and jam",
                        "product_fr": "Sauce et confiture",
                        "product_image": "/assets/images/Products/sauce_jam.webp",
                        "capacity": 880,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع زيت الزيتون",
                    "factory_en": "Olive Oil Factory",
                    "factory_fr": "Usine d'huile d'olive",
                    "products": [
                      {
                        "product_ar": "زيت زيتون",
                        "product_en": "Olive oil",
                        "product_fr": "Huile d'olive",
                        "product_image": "/assets/images/Products/olive_oil.webp",
                        "capacity": 300,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج المخللات",
                    "factory_en": "Pickles Production Factory",
                    "factory_fr": "Usine de production de cornichons",
                    "products": [
                      {
                        "product_ar": "مخللات",
                        "product_en": "Pickles",
                        "product_fr": "Cornichons",
                        "product_image": "/assets/images/Products/pickles.webp",
                        "capacity": 100,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "مزرعة 6 أكتوبر / قطاع الأمن الغذائي",
                "location_en": "6 October Farm / Food Security Sector",
                "location_fr": "Ferme 6 Octobre / Secteur de la sécurité alimentaire",
                "governorate_ar": "البحيرة",
                "governorate_en": "Beheira",
                "governorate_fr": "Beheira",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مصنع زيت الزيتون",
                    "factory_en": "Olive Oil Factory",
                    "factory_fr": "Usine d'huile d'olive",
                    "products": [
                      {
                        "product_ar": "زيت زيتون",
                        "product_en": "Olive oil",
                        "product_fr": "Huile d'olive",
                        "product_image": "/assets/images/Products/olive_oil.webp",
                        "capacity": 360,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج المخللات",
                    "factory_en": "Pickles Production Factory",
                    "factory_fr": "Usine de production de cornichons",
                    "products": [
                      {
                        "product_ar": "مخللات",
                        "product_en": "Pickles",
                        "product_fr": "Cornichons",
                        "product_image": "/assets/images/Products/pickles.webp",
                        "capacity": 390,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 17,
          "ar": "شركة مصر العليا للتصنيع الزراعي وإستصلاح الأراضي والتوريدات العمومية",
          "en": "Upper Egypt for Agricultural Manufacturing, Land Reclamation and Public Supplies",
          "fr": "Haute-Égypte pour la fabrication agricole, la bonification des terres et les approvisionnements publics",
          "logo": "/assets/images/companies_logo/Upper_Egypt.webp",
          "link":"www.upperegypt.com.eg",

          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/upper_egypt/1.webp",
                "title": "شركة مصر العليا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/upper_egypt/2.webp",
                "title": "شركة مصر العليا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/upper_egypt/3.webp",
                "title": "شركة مصر العليا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/upper_egypt/4.webp",
                "title": "شركة مصر العليا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "1998",
            "description_ar": "أنشئت الشركة عام 1998 بهدف المشاركة في خطة التنمية الاقتصادية والاجتماعية للدولة من خلال قاعدة صناعية إنتاجية متطورة وتنمية الثروة الحيوانية لتوفير مجالات واحتياجات السوق المحلي من المنتجات الغذائية بهدف تخفيف الأعباء عن الدولة وتوفير فرص عمل للشباب جنوب الوادي. تعمل الشركة في مجالات تصنيع المنتجات الزراعية والحيوانية واستصلاح الأراضي والتوريدات العمومية كما تساهم في رفع أعباء المعيشة عن المواطن بإدارة عدد من المنافذ الثابتة والمتحركة بمحافظات الجنوب.",
            "description_en": "Company established in 1998 to participate in the state's economic and social development plan through an advanced industrial production base and development of livestock wealth to provide areas and needs of the local market for food products, aiming to alleviate burdens on the state and provide job opportunities for youth in southern valley. The company works in manufacturing agricultural and animal products, land reclamation, and public supplies, and contributes to alleviating living burdens on citizens by managing a number of fixed and mobile outlets in southern governorates.",
            "description_fr": "Société créée en 1998 pour participer au plan de développement économique et social de l'État grâce à une base de production industrielle avancée et au développement de la richesse animale pour fournir des domaines et des besoins du marché local en produits alimentaires, visant à alléger les charges de l'État et à fournir des opportunités d'emploi aux jeunes du sud de la vallée. L'entreprise travaille dans la fabrication de produits agricoles et animaux, la remise en état des terres et les approvisionnements publics, et contribue à alléger les charges de subsistance des citoyens en gérant un certain nombre de points de vente fixes et mobiles dans les gouvernorats du sud.",
            "products": [
              "المنتجات الزراعية",
              "المنتجات الحيوانية",
              "استصلاح الأراضي",
              "التوريدات العمومية"
            ],
            "contact": {
              "address": "إنشاء محمود طعت - شارع الطيران - مدينة نصر - القاهرة",
              "phone": "02-22639041",
              "fax": "02-22639041",
              "email": ""
            },
            "headquarter": {
              "address": "13 شارع محمود طلعت الطيران م. نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "عدد (3) مصنع (علف – مربى - جبن / ألبان)",
                "location": "حى الكوثر - أخميم",
                "governorate": "سوهاج"
              },
              {
                "unit_name": "عدد (2) مصنع (صلصة – بصل)",
                "location": "الخارجة",
                "governorate": "الوادى الجديد"
              },
              {
                "unit_name": "رئاسة الشركة بأسيوط",
                "location": "ش نائلة خاتون منطقة سيتي",
                "governorate": "أسيوط"
              },
              {
                "unit_name": "مزرعة إنتاج حيوانى + عدد (2) مصنع (علف - جبن/ ألبان)",
                "location": "أبنوب - عرب العوامر",
                "governorate": "أسيوط"
              },
              {
                "unit_name": "مزرعة إنتاج حيوانى ونباتى",
                "location": "وادى الشيح",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "مؤخرة الشركة",
                "location": "الهايكستب بوابة (15)",
                "governorate": "القاهرة"
              }
            ],
            "locations": [
              {
                "location_ar": "13 شارع محمود طلعت الطيران م. نصر",
                "location_en": "13 Mahmoud Talat Aviation Street, Nasr City",
                "location_fr": "13 Rue de l'Aviation Mahmoud Talat, Ville Nasr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة بالقاهرة",
                    "factory_en": "Company Headquarters in Cairo",
                    "factory_fr": "Siège social de l'entreprise au Caire",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "ش نائلة خاتون منطقة سيتي",
                "location_en": "Naila Khatoun Street, City Area",
                "location_fr": "Rue Naila Khatoun, Zone City",
                "governorate_ar": "أسيوط",
                "governorate_en": "Assiut",
                "governorate_fr": "Assiout",
                "formation_ar": "م ج ع",
                "formation_en": "M G A",
                "formation_fr": "M G A",
                "factories": [
                  {
                    "factory_ar": "مصنع الألبان بأسيوط",
                    "factory_en": "Dairy Factory in Assiut",
                    "factory_fr": "Usine laitière à Assiout",
                    "products": [
                      {
                        "product_ar": "جبن (250) جم تتراباك",
                        "product_en": "Cheese (250) gm Tetra Pak",
                        "product_fr": "Fromage (250) gm Tetra Pak",
                        "product_image": "/assets/images/Products/cheese.webp",
                        "capacity": 2700,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "حي الكوثر - أخميم",
                "location_en": "Al-Kawthar District - Akhmim",
                "location_fr": "Quartier Al-Kawthar - Akhmim",
                "governorate_ar": "سوهاج",
                "governorate_en": "Sohag",
                "governorate_fr": "Sohag",
                "formation_ar": "م ج ع",
                "formation_en": "M G A",
                "formation_fr": "M G A",
                "factories": [
                  {
                    "factory_ar": "مصنع العلق بسوهاج",
                    "factory_en": "Feed Factory in Sohag",
                    "factory_fr": "Usine d'aliments à Sohag",
                    "products": [
                      {
                        "product_ar": "جبن (80) جم تتراباك",
                        "product_en": "Cheese (80) gm Tetra Pak",
                        "product_fr": "Fromage (80) gm Tetra Pak",
                        "product_image": "/assets/images/Products/cheese.webp",
                        "capacity": 1296,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "الخارجة",
                "location_en": "Al-Kharga",
                "location_fr": "Al-Kharga",
                "governorate_ar": "الوادي الجديد",
                "governorate_en": "New Valley",
                "governorate_fr": "Nouvelle Vallée",
                "formation_ar": "م غ ع",
                "formation_en": "M Gh A",
                "formation_fr": "M Gh A",
                "factories": [
                  {
                    "factory_ar": "مصنع بصل الوادي الجديد",
                    "factory_en": "Onion Factory in New Valley",
                    "factory_fr": "Usine d'oignons de la Nouvelle Vallée",
                    "products": [
                      {
                        "product_ar": "ثوم وبصل مجفف بودرة وشرائح",
                        "product_en": "Garlic and onion dried powder and slices",
                        "product_fr": "Ail et oignon séchés en poudre et en tranches",
                        "product_image": "/assets/images/Products/onion_garlic.webp",
                        "capacity": 700,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 18,
          "ar": "الشركة الوطنية لإستصلاح وزراعة الأراضى الصحراوية",
          "en": "National Company for Reclamation and Cultivation of Desert Lands",
          "fr": "Société nationale pour la bonification et la culture des terres désertiques",
          "logo": "/assets/images/companies_logo/owinat3.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/desert/1.webp",
                "title": "الشركة الوطنية لإستصلاح الأراضي",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/desert/2.webp",
                "title": "الشركة الوطنية لإستصلاح الأراضي",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/desert/3.webp",
                "title": "الشركة الوطنية لإستصلاح الأراضي",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/desert/4.webp",
                "title": "الشركة الوطنية لإستصلاح الأراضي",
                "description": " منطقة شرق العوينات"
              }
            ],
            "establishment_year": "1999",
            "description_ar": "أنشئت الشركة عام 1999 بهدف استصلاح وزراعة الأراضي الصحراوية بمنطقة شرق العوينات، وخلق فرص عمل للشباب وإقامة مجتمعات عمرانية جديدة. تعمل الشركة في مجال استصلاح وزراعة الأراضي الصحراوية وزراعة المحاصيل الاستراتيجية الهامة كالقمح والشعير والذرة الصفراء وكذلك العديد من أصناف الخضروات والفاكهة والنباتات الطبية إضافة إلى تربية الأغنام ومناحل إنتاج عسل النحل.",
            "description_en": "Company established in 1999 to reclaim and cultivate desert lands in East Owaynat area, create job opportunities for youth, and establish new urban communities. The company works in reclaiming and cultivating desert lands, cultivating important strategic crops such as wheat, barley, and yellow corn, as well as many varieties of vegetables, fruits, and medicinal plants in addition to raising sheep and honey production apiaries.",
            "description_fr": "Société créée en 1999 pour récupérer et cultiver des terres désertiques dans la région d'East Owaynat, créer des opportunités d'emploi pour les jeunes et établir de nouvelles communautés urbaines. L'entreprise travaille dans la récupération et la culture des terres désertiques, la culture de cultures stratégiques importantes telles que le blé, l'orge et le maïs jaune, ainsi que de nombreuses variétés de légumes, de fruits et de plantes médicinales en plus de l'élevage de moutons et de ruchers de production de miel.",
            "products": [
              "القمح",
              "الشعير",
              "الذرة الصفراء",
              "الخضروات",
              "الفاكهة",
              "النباتات الطبية",
              "الأغنام",
              "عسل النحل"
            ],
            "contact": {
              "address": "14 شارع محمود طلعت – شارع الطيران – مدينة نصر – القاهرة",
              "phone": "02-24195298",
              "fax": "02-24195298",
              "email": ""
            },
            "headquarter": {
              "address": "برج رقم (3) / الميثاق أبراج زهراء مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مزرعة شرق العوينات",
                "location": "شرق العوينات",
                "governorate": "الوادى الجديد"
              },
              {
                "unit_name": "مزرعة الفرافرة",
                "location": "الفرافرة",
                "governorate": "الوادى الجديد"
              },
              {
                "unit_name": "مزرعة عين دالة",
                "location": "عين دالة",
                "governorate": "الوادى الجديد"
              },
              {
                "unit_name": "مزرعة توشكي",
                "location": "توشكي",
                "governorate": "أسوان"
              }
            ],
            "locations": [
              {
                "location_ar": "برج رقم (3) / أبراج زهراء مدينة نصر",
                "location_en": "Tower No. (3) / Zohour Towers, Nasr City",
                "location_fr": "Tour n° (3) / Tours Zohour, Ville Nasr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "شرق العوينات",
                "location_en": "East Oweinat",
                "location_fr": "Est Oweinat",
                "governorate_ar": "الوادي الجديد",
                "governorate_en": "New Valley",
                "governorate_fr": "Nouvelle Vallée",
                "formation_ar": "م ج ع",
                "formation_en": "M G A",
                "formation_fr": "M G A",
                "factories": [
                  {
                    "factory_ar": "مزرعة شرق العوينات",
                    "factory_en": "East Oweinat Farm",
                    "factory_fr": "Ferme d'Est Oweinat",
                    "products": [
                      {
                        "product_ar": "محاصيل - فاكهة - تمور - خضر",
                        "product_en": "Crops - fruits - dates - vegetables",
                        "product_fr": "Cultures - fruits - dattes - légumes",
                        "product_image": "/assets/images/Products/crops.webp",
                        "capacity": 160000,
                        "unit_ar": "فدان",
                        "unit_en": "acres",
                        "unit_fr": "acres"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "توشكي",
                "location_en": "Toshka",
                "location_fr": "Toshka",
                "governorate_ar": "أسوان",
                "governorate_en": "Aswan",
                "governorate_fr": "Assouan",
                "formation_ar": "م ج ع",
                "formation_en": "M G A",
                "formation_fr": "M G A",
                "factories": [
                  {
                    "factory_ar": "مزرعة توشكي",
                    "factory_en": "Toshka Farm",
                    "factory_fr": "Ferme de Toshka",
                    "products": [
                      {
                        "product_ar": "محاصيل - فاكهة - تمور - خضر",
                        "product_en": "Crops - fruits - dates - vegetables",
                        "product_fr": "Cultures - fruits - dattes - légumes",
                        "product_image": "/assets/images/Products/crops.webp",
                        "capacity": 62000,
                        "unit_ar": "فدان",
                        "unit_en": "acres",
                        "unit_fr": "acres"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 4
        },
        {
          "id": 19,
          "ar": "الشركة الوطنية للزراعات المحمية",
          "en": "National Company for Protected Agriculture",
          "fr": "Société nationale pour l'agriculture protégée",
          "logo": "/assets/images/companies_logo/Green Houses1.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "محطات الفرز والتعبئة الملحقة بقطاعات البيوت الزراعية",
                "en": "Sorting and Packaging Stations Attached to Greenhouse Sectors",
                "fr": "Stations de tri et d’emballage rattachées aux secteurs des serres agricoles"
              },
              {
                "id": 2,
                "ar": "زراعة بيوت زراعية بقطاعات الشركة الوطنية للزراعات المحمية",
                "en": "Establishment of Greenhouses within the National Company for Protected Cultivation Sectors",
                "fr": "Création de serres agricoles au sein des secteurs de la Société Nationale des Cultures Protégées"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/greenhouse/1.webp",
                "title": "الشركة الوطنية للزراعات المحمية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/greenhouse/2.webp",
                "title": "الشركة الوطنية للزراعات المحمية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/greenhouse/6.webp",
                "title": "الشركة الوطنية للزراعات المحمية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/greenhouse/3.webp",
                "title": "الشركة الوطنية للزراعات المحمية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/greenhouse/4.webp",
                "title": "الشركة الوطنية للزراعات المحمية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2017",
            "description_ar": "أنشئت الشركة عام 2017 بهدف توفير مناخ زراعي صحي آمن ذو جودة عالية ناتج من الزراعة في البيوت الزراعية المحمية وكذلك الزراعات المفتوحة في المساحات بين البيوت الزراعية بغرض المساهمة في تنفيذ خطة التنمية الشاملة للدولة في مجال الأمن الغذائي والحرص على سد الفجوة الغذائية بين الإنتاج والاستهلاك. تنتج الشركة أصناف الخضروات والفاكهة ذات الجودة العالية والخالية من متبقيات المبيدات من خلال استخدام منظومة كاملة للتحكم البيئي في درجات الحرارة والتهوية والترطيب والإضاءة.",
            "description_en": "Established in 2017 to provide a healthy, safe, high-quality agricultural climate resulting from cultivation in protected agricultural houses and open cultivation in spaces between agricultural houses, aiming to contribute to implementing the state's comprehensive development plan in food security and ensuring to bridge the food gap between production and consumption. The company produces high-quality varieties of vegetables and fruits free from pesticide residues through using a complete system for environmental control of temperature, ventilation, humidity, and lighting.",
            "description_fr": "Créée en 2017 pour fournir un climat agricole sain, sûr et de haute qualité résultant de la culture dans des serres agricoles et de la culture en plein air dans les espaces entre les serres, visant à contribuer à la mise en œuvre du plan de développement global de l'État en matière de sécurité alimentaire et à veiller à combler le déficit alimentaire entre la production et la consommation. L'entreprise produit des variétés de légumes et de fruits de haute qualité exemptes de résidus de pesticides grâce à l'utilisation d'un système complet de contrôle environnemental de la température, de la ventilation, de l'humidité et de l'éclairage.",
            "products": ["الخضروات", "الفاكهة", "الزراعات المحمية"],
            "contact": {
              "address": "المنطقة الثانية - التجمع الخامس - القاهرة",
              "phone": " 220484556",
              "fax": " 220484557",
              "email": "Ncpc@nspo.com.eg"
            },
            "headquarter": {
              "address": "التجمع الخامس المنطقة الثانية أمام سما مول",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "قطاع الحمام (قاعدة محمـد نجيب)",
                "location": "قاعدة محمـد نجيب بالحمام",
                "governorate": "مطروح"
              },
              {
                "unit_name": "قطاع العاشر من رمضان",
                "location": "شرق العاشر من رمضان",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "قطاع أبو سلطان (1)",
                "location": "جنوب أبو سلطان خلف قاعدة فايد الجوية",
                "governorate": "الإسماعيلية"
              },
              {
                "unit_name": "قطاع أبو سلطان (2)",
                "location": "جنوب أبو سلطان خلف قاعدة فايد الجوية",
                "governorate": "الإسماعيلية"
              },
              {
                "unit_name": "قطاع الأمل",
                "location": "قرية الأمل القنطرة شرق",
                "governorate": "الإسماعيلية"
              }
            ],
            "locations": [
              {
                "location_ar": "التجمع الخامس المنطقة الثانية أمام سما مول",
                "location_en": "Fifth Settlement, Second Area in front of Sama Mall",
                "location_fr": "Cinquième Agglomération, Deuxième zone devant le centre commercial Sama",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "قاعدة محمـد نجيب بالحمام",
                "location_en": "Mohamed Naguib Base in Al-Hamam",
                "location_fr": "Base Mohamed Naguib à Al-Hamam",
                "governorate_ar": "مطروح",
                "governorate_en": "Matrouh",
                "governorate_fr": "Matrouh",
                "formation_ar": "م غ ع",
                "formation_en": "M Gh A",
                "formation_fr": "M Gh A",
                "factories": [
                  {
                    "factory_ar": "قطاع الحمام (قاعدة محمـد نجيب)",
                    "factory_en": "Al-Hamam Sector (Mohamed Naguib Base)",
                    "factory_fr": "Secteur d'Al-Hamam (Base Mohamed Naguib)",
                    "products": [
                      {
                        "product_ar": "خضراوات متنوعة",
                        "product_en": "Various vegetables",
                        "product_fr": "Légumes variés",
                        "product_image": "/assets/ images/comp_factories/greenhouse/5.webp",
                        "capacity": 80277,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "شرق العاشر من رمضان",
                "location_en": "East 10th of Ramadan",
                "location_fr": "Est 10 Ramadan",
                "governorate_ar": "الشرقية",
                "governorate_en": "Sharqia",
                "governorate_fr": "Charqia",
                "formation_ar": "م ع ع",
                "formation_en": "M A A",
                "formation_fr": "M A A",
                "factories": [
                  {
                    "factory_ar": "قطاع العاشر من رمضان",
                    "factory_en": "10th of Ramadan Sector",
                    "factory_fr": "Secteur 10 Ramadan",
                    "products": [
                      {
                        "product_ar": "خضراوات متنوعة",
                        "product_en": "Various vegetables",
                        "product_fr": "Légumes variés",
                        "product_image": "/assets/images/Products/vegetables.webp",
                        "capacity": 53575,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "جنوب أبو سلطان خلف قاعدة فايد الجوية",
                "location_en": "South Abu Sultan behind Faid Air Base",
                "location_fr": "Sud Abu Sultan derrière la base aérienne de Faid",
                "governorate_ar": "الإسماعيلية",
                "governorate_en": "Ismailia",
                "governorate_fr": "Ismaïlia",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "قطاع أبو سلطان (1)",
                    "factory_en": "Abu Sultan Sector (1)",
                    "factory_fr": "Secteur Abu Sultan (1)",
                    "products": [
                      {
                        "product_ar": "خضراوات متنوعة",
                        "product_en": "Various vegetables",
                        "product_fr": "Légumes variés",
                        "product_image": "/assets/images/Products/vegetables.webp",
                        "capacity": 71182,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "قطاع أبو سلطان (2)",
                    "factory_en": "Abu Sultan Sector (2)",
                    "factory_fr": "Secteur Abu Sultan (2)",
                    "products": [
                      {
                        "product_ar": "خضراوات متنوعة",
                        "product_en": "Various vegetables",
                        "product_fr": "Légumes variés",
                        "product_image": "/assets/images/Products/vegetables.webp",
                        "capacity": 20158,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 20,
          "ar": "الشركة الوطنية للإنتاج الحيوانى",
          "en": "National Livestock Production Company",
          "fr": "Société nationale de production animale",
          "logo": "/assets/images/companies_logo/AnimalProduction.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "عدد (1) مجزر آلي ملحق به صالة لمصنعات اللحوم وعدد (1) محجر بيطري",
                "en": "One Automated Slaughterhouse Attached to a Meat Processing Hall and One Veterinary Quarantine Facility",
                "fr": "Un abattoir automatisé avec une unité de transformation des viandes et un centre de quarantaine vétérinaire"
              },
              {
                "id": 2,
                "ar": "عدد (2) مزرعة تسمين",
                "en": "Two Fattening Farms",
                "fr": "Deux fermes d’engraissement"
              },
              {
                "id": 3,
                "ar": "عدد (2) مزرعة تسمين وعدد (1) مجزر آلي متكامل وعدد (1) مصنع كورنيد بيف وصالة لمصنعات اللحوم",
                "en": "Two Fattening Farms, One Integrated Automated Slaughterhouse, One Corned Beef Factory, and a Meat Processing Hall",
                "fr": "Deux fermes d’engraissement, un abattoir automatisé intégré, une usine de corned-beef et une unité de transformation des viandes"
              },
              {
                "id": 4,
                "ar": "عدد (5) مزرعة حلاب وعدد (1) مزرعة تسمين",
                "en": "Five Dairy Farms and One Fattening Farm",
                "fr": "Cinq fermes laitières et une ferme d’engraissement"
              },
              {
                "id": 5,
                "ar": "عدد (9) مزرعة تسمين ومجزر آلي ملحق به صالة لمصنعات اللحوم",
                "en": "Nine Fattening Farms and an Automated Slaughterhouse with a Meat Processing Hall",
                "fr": "Neuf fermes d’engraissement et un abattoir automatisé avec une unité de transformation des viandes"
              }
            ],
            
            "Gallary": [
            
              {
                "id": 1,
                "url": "/assets/images/comp_factories/livestock/1.webp",
                "title": "الشركة الوطنية للإنتاج الحيواني",
                "description": "فريق العمل"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/livestock/2.webp",
                "title": "الشركة الوطنية للإنتاج الحيواني",
                "description": "المركز البيطري"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/livestock/3.webp",
                "title": "الشركة الوطنية للإنتاج الحيواني",
                "description": "قطيع ابكار من افضل الانواع"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/livestock/4.webp",
                "title": " مخزن الاعلاف",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2017",
            "description_ar": "أنشئت الشركة عام 2019 بهدف رفع العبء على المواطن المصري من خلال المساهمة في سد الفجوة الغذائية وتحقيق الاكتفاء الذاتي من خلال امتلاك الشركة عدد (1) مجمعات للإنتاج الحيواني و(2) مجمعات لإنتاج الألبان و(3) مجزر آلي متكامل و(4) مصنع كونسروة بيض و(5) مصنع لإنتاج الجبن الجاف والنصف جاف و(6) مركز علمي بيطري للأبحاث والتدريب. تنتج الشركة اللحوم الحمراء ومصنعات اللحوم وكذلك الألبان ومنتجاتها بأسعار تتناسب مع دخل المواطن المصري.",
            "description_en": "Established in 2019 to alleviate the burden on Egyptian citizens by contributing to bridging the food gap and achieving self-sufficiency through the company's ownership of (1) animal production complexes, (2) dairy production complexes, (3) integrated automated slaughterhouse, (4) egg canning factory, (5) factory for producing dry and semi-dry cheese, and (6) veterinary scientific center for research and training. The company produces red meat, meat products, as well as dairy and its products at prices suitable for Egyptian citizens' income.",
            "description_fr": "Créée en 2019 pour alléger le fardeau des citoyens égyptiens en contribuant à combler le déficit alimentaire et à réaliser l'autosuffisance grâce à la possession par l'entreprise de (1) complexes de production animale, (2) complexes de production laitière, (3) abattoir automatisé intégré, (4) usine de mise en conserve d'œufs, (5) usine de production de fromage sec et semi-sec, et (6) centre scientifique vétérinaire pour la recherche et la formation. L'entreprise produit de la viande rouge, des produits carnés, ainsi que des produits laitiers et leurs dérivés à des prix adaptés au revenu des citoyens égyptiens.",
            "products": [
              "اللحوم الحمراء",
              "مصنعات اللحوم",
              "الألبان",
              "منتجات الألبان",
              "الجبن الجاف والنصف جاف",
              "البيض المعلب"
            ],
            "contact": {
              "address": "برج رقم (1) - مدخل 2 - شارع الميثاق - زهراء مدينة نصر - القاهرة",
              "phone": "0220484506 - 0220484507",
              "fax": "",
              "email": "ncap@nspo.com.eg"
            },
            "headquarter": {
              "address": "أبراج الصفوة - ش الميثاق - زهراء م نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (1) [ صندوق التأمين ]",
                "location": "قرية صندوق التأمين- غرب النوبارية",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (2) [ صلاح العبد ]",
                "location": "قرية صلاح العبد - غرب النوبارية",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (3 ، 4) [ اليشع ]",
                "location": "قرية اليشع - غرب النوبارية",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (5) [ أدم ]",
                "location": "قرية أدم - غرب النوبارية",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (6) [ شمال التحرير ]",
                "location": "مركز شمال التحرير - طر أسكندرية الصحراوي",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (7) [ الوادى الجديد ]",
                "location": "الخارجة - الوادى الجديد",
                "governorate": "الوادى الجديد"
              },
              {
                "unit_name": "مجمع الإنتاج الألبان رقم (1) [ البستان ]",
                "location": "قرية عبد المنعم رياض - البستان - الدلنجات",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الألبان رقم (2) [ اليشع 2 ]",
                "location": "قرية اليشع 2 - النوبارية",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى المتكامل [ يوسف الصديق ]",
                "location": "مركز يوسف الصديق",
                "governorate": "الفيوم"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى رقم (8) [ قبلى قارون ]",
                "location": "مركز قبلى قاورن",
                "governorate": "الفيوم"
              },
              {
                "unit_name": "مجمع الإنتاج الحيوانى والألبان [ السادات ]",
                "location": "مدينة السادات",
                "governorate": "المنوفية"
              },
              {
                "unit_name": "المجزر الآلى المتكامل [ النوبارية ]",
                "location": "قرية الشجاعة - النوبارية",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "المجزر الآلى المتكامل [ سفاجا ]",
                "location": "الطريق الدائرى - سفاجا",
                "governorate": "البحر الأحمر"
              },
              {
                "unit_name": "مصنع إنتاج الألبان ومنتجاتها رقم (1) [ برج العرب ]",
                "location": "المنطقة الصناعية الرابعة - برج العرب",
                "governorate": "الأسكندرية"
              }
            ],
            "locations": [
              {
                "location_ar": "أبراج الصفوة - ش الميثاق - زهراء م نصر",
                "location_en": "Al-Safwa Towers - Al-Mithaq Street - Zohour, Nasr City",
                "location_fr": "Tours Al-Safwa - Rue Al-Mithaq - Zohour, Ville Nasr",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "قرية صندوق التأمين- غرب النوبارية",
                "location_en": "Sandouk Al-Taamin Village - West Nubaria",
                "location_fr": "Village Sandouk Al-Taamin - Ouest Nubaria",
                "governorate_ar": "البحيرة",
                "governorate_en": "Beheira",
                "governorate_fr": "Beheira",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مجمع الإنتاج الحيواني رقم (1)",
                    "factory_en": "Livestock Production Complex No. (1)",
                    "factory_fr": "Complexe de production animale n° (1)",
                    "products": [
                      {
                        "product_ar": "لحوم حمراء (حية - طازجة)",
                        "product_en": "Red meat (live - fresh)",
                        "product_fr": "Viande rouge (vivante - fraîche)",
                        "product_image": "/assets/images/Products/red_meat.webp",
                        "capacity": 15000,
                        "unit_ar": "رأس تسمين/عام",
                        "unit_en": "head of fattening/year",
                        "unit_fr": "têtes d'engraissement/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "مركز يوسف الصديق",
                "location_en": "Yusuf Al-Siddiq Center",
                "location_fr": "Centre Yusuf Al-Siddiq",
                "governorate_ar": "الفيوم",
                "governorate_en": "Fayoum",
                "governorate_fr": "Fayoum",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مجمع الإنتاج الحيواني المتكامل",
                    "factory_en": "Integrated Livestock Production Complex",
                    "factory_fr": "Complexe intégré de production animale",
                    "products": [
                      {
                        "product_ar": "لحوم حمراء (حية - طازجة)",
                        "product_en": "Red meat (live - fresh)",
                        "product_fr": "Viande rouge (vivante - fraîche)",
                        "product_image": "/assets/images/Products/red_meat.webp",
                        "capacity": 18000,
                        "unit_ar": "رأس تسمين/عام",
                        "unit_en": "head of fattening/year",
                        "unit_fr": "têtes d'engraissement/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 21,
          "ar": "قطاع الدلتا لإنتاج الأسماك / غليون",
          "en": "Delta Sector for Fish Production / Gilyoun",
          "fr": "Secteur du Delta pour la production de poissons/Gilyoun",
          "logo": "/assets/images/companies_logo/Ghalioun.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/fish/1.webp",
                "title": "قطاع الدلتا لإنتاج الأسماك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/fish/2.webp",
                "title": "قطاع الدلتا لإنتاج الأسماك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/fish/3.webp",
                "title": "قطاع الدلتا لإنتاج الأسماك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/fish/4.webp",
                "title": "قطاع الدلتا لإنتاج الأسماك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2017",
            "description_ar": "أنشئ القطاع عام 2017 بهدف خلق إضافة جديدة في مجال الاقتصاد القومي وخدمة المجتمع وذلك بتوفير جميع أنواع الأسماك البحرية والأسماك المياه العذبة بأسعار مناسبة وأفضل سعر لجميع فئات المجتمع. ويعمل القطاع على استزراع وتفريغ وتعبئة الأسماك والجمبري وإنتاج أعلاف الأسماك والجمبري وإنتاج الثلج (مجروش - بلوكات) وإنتاج عبوات الفوم بأحجامها المختلفة.",
            "description_en": "Sector established in 2017 to create a new addition in the national economy and serve the community by providing all types of marine fish and freshwater fish at appropriate prices and the best price for all segments of society. The sector works on farming, unloading and packaging fish and shrimp, producing fish and shrimp feed, producing ice (crushed - blocks) and producing foam containers of different sizes.",
            "description_fr": "Secteur créé en 2017 pour créer un nouvel ajout dans l'économie nationale et servir la communauté en fournissant tous types de poissons marins et d'eau douce à des prix appropriés et au meilleur prix pour toutes les couches de la société. Le secteur travaille sur l'élevage, le déchargement et l'emballage du poisson et des crevettes, la production d'aliments pour poissons et crevettes, la production de glace (concassée - blocs) et la production de conteneurs en mousse de différentes tailles.",
            "products": [
              "الأسماك البحرية",
              "الأسماك المياه العذبة",
              "الجمبري",
              "أعلاف الأسماك",
              "الثلج",
              "عبوات الفوم"
            ],
            "contact": {
              "address": "قطاع الدلتا للأسماك (غليون) محافظة كفر الشيخ - الجزيرة الخضراء (غليون) - كفر الشيخ",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "كفر الشيخ",
              "governorate": "كفر الشيخ"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "الجزيرة الخضراء - مطوبس - بركة غليون",
                "location_en": "Al-Jazeera Al-Khadra - Mutubis - Berket Gilyoun",
                "location_fr": "Al-Jazeera Al-Khadra - Mutubis - Berket Gilyoun",
                "governorate_ar": "كفر الشيخ",
                "governorate_en": "Kafr El-Sheikh",
                "governorate_fr": "Kafr El-Sheikh",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "رئاسة القطاع",
                    "factory_en": "Sector Headquarters",
                    "factory_fr": "Siège du secteur",
                    "products": []
                  },
                  {
                    "factory_ar": "مصنع إنتاج وتعبئة الأسماك والجمبري",
                    "factory_en": "Fish and Shrimp Production and Packaging Factory",
                    "factory_fr": "Usine de production et d'emballage de poissons et de crevettes",
                    "products": [
                      {
                        "product_ar": "أسماك وجمبري",
                        "product_en": "Fish and shrimp",
                        "product_fr": "Poissons et crevettes",
                        "product_image": "/assets/images/Products/fish_shrimp.webp",
                        "capacity": 30000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "مصنع إنتاج أعلاف الأسماك والجمبري",
                    "factory_en": "Fish and Shrimp Feed Production Factory",
                    "factory_fr": "Usine de production d'aliments pour poissons et crevettes",
                    "products": [
                      {
                        "product_ar": "أعلاف أسماك وجمبري",
                        "product_en": "Fish and shrimp feed",
                        "product_fr": "Aliments pour poissons et crevettes",
                        "product_image": "/assets/images/Products/fish_feed.webp",
                        "capacity": 180000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  },
                  {
                    "factory_ar": "المزرعة السمكية",
                    "factory_en": "Fish Farm",
                    "factory_fr": "Ferme piscicole",
                    "products": [
                      {
                        "product_ar": "أسماك وجمبري",
                        "product_en": "Fish and shrimp",
                        "product_fr": "Poissons et crevettes",
                        "product_image": "/assets/images/Products/fish_shrimp.webp",
                        "capacity": 10333,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 22,
          "ar": "شركة سايلو فودز للصناعات الغذائية",
          "en": "Silo Foods for Food Industries",
          "fr": "Silo Foods pour les industries alimentaires",
          "logo": "/assets/images/companies_logo/Silo1.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "الصناعات الغذائية (شركة سايلو فودز للصناعات الغذائية)",
                "en": "Food Industries (Silo Foods Company for Food Industries)",
                "fr": "Industries alimentaires (Société Silo Foods pour les industries alimentaires)"
              }
            ],
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/silo/1.webp",
                "title": "شركة سايلو فودز",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/silo/2.webp",
                "title": "شركة سايلو فودز",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/silo/3.webp",
                "title": "شركة سايلو فودز",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/silo/4.webp",
                "title": "شركة سايلو فودز",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2020",
            "description_ar": "أنشئت الشركة عام 2020 بهدف تقليل الفجوة بين الإنتاج والاستهلاك من المنتجات التي تعمل عليها الشركة باعتبارها منتجات تهم قطاع عريض من المواطنين وتقليل حجم الاستيراد من تلك المنتجات بتوفير منتج ذو جودة عالية وسعر مناسب. تنتج الشركة البسكويت بأنواعه والمكرونة بأنواعها والمخبوزات الشرقية والغربية بأنواعها كمنتج الشركة وجبات التغذية المدرسية لطلاب التعليم الأساسي بقيمة غذائية عالية وطبقاً لدراسات دقيقة في ذلك الشأن من خلال ستة مصانع ومطحن ومجموعة صوامع للقمح، بالإضافة إلى ثلاثة مصانع للطباعة والتغليف.",
            "description_en": "Established in 2000 to reduce the gap between production and consumption of the products the company works on, as they are products that concern a wide segment of citizens, and reduce the volume of imports of these products by providing a high-quality product at an appropriate price. The company produces biscuits of all types, pasta of all types, Eastern and Western baked goods of all types, and the company's product of school meals for basic education students with high nutritional value and according to accurate studies in this regard through six factories, a mill, and a group of wheat silos, in addition to three printing and packaging factories.",
            "description_fr": "Créée en 2000 pour réduire l'écart entre la production et la consommation des produits sur lesquels l'entreprise travaille, car ce sont des produits qui concernent une large segment de citoyens, et réduire le volume des importations de ces produits en fournissant un produit de haute qualité à un prix approprié. L'entreprise produit des biscuits de tous types, des pâtes de tous types, des produits de boulangerie orientaux et occidentaux de tous types, et le produit de l'entreprise de repas scolaires pour les élèves de l'enseignement de base avec une valeur nutritionnelle élevée et selon des études précises à cet égard grâce à six usines, un moulin et un groupe de silos à blé, en plus de trois usines d'impression et d'emballage.",
            "products": [
              "البسكويت",
              "المكرونة",
              "المخبوزات الشرقية والغربية",
              "وجبات التغذية المدرسية",
              "الطحين"
            ],
            "contact": {
              "address": "برج رقم (4) - زهراء مدينة نصر - القاهرة",
              "phone": "",
              "fax": "",
              "email": "www.silo-foods.com"
            },
            "headquarter": {
              "address": "برج رقم (4) / أبراج زهراء مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مصانع الشركة",
                "location": "المنطقة الصناعية بحى المطورين - السادات",
                "governorate": "المنوفية"
              }
            ],
            "locations": [
              {
                "location_ar": "المنطقة الصناعية - السادات",
                "location_en": "Industrial Zone - Sadat City",
                "location_fr": "Zone industrielle - Ville Sadat",
                "governorate_ar": "المنوفية",
                "governorate_en": "Menoufia",
                "governorate_fr": "Menoufia",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع سايلو فودز الرئيسي",
                    "factory_en": "Silo Foods Main Factory",
                    "factory_fr": "Usine principale de Silo Foods",
                    "products": [
                      {
                        "product_ar": "منتجات غذائية متنوعة",
                        "product_en": "Various food products",
                        "product_fr": "Divers produits alimentaires",
                        "product_image": "/assets/images/comp_factories/silo/4.webp",
                        "capacity": 50000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 23,
          "ar": "الشركة الوطنية للثروة السمكية والأحياء المائية",
          "en": "National Company for Fisheries and Aquatic Wealth",
          "fr": "Société nationale pour les ressources halieutiques et aquatiques",
          "logo": "/assets/images/companies_logo/Fish.webp",
          "link":"www.ncfa.com.eg",

          "details": {
            "opportunity":[
              {
                "id": 15,
                "ar": "مصنع تجهيز وتعبئة الأسماك والجمبري",
                "en": "Fish and Shrimp Processing and Packaging Factory",
                "fr": "Usine de transformation et d’emballage de poissons et de crevettes"
              },
              {
                "id": 16,
                "ar": "مصنع إنتاج الثلج (القوالب والمجروش)",
                "en": "Ice Production Factory (Block and Crushed Ice)",
                "fr": "Usine de production de glace (blocs et glace pilée)"
              },
              {
                "id": 17,
                "ar": "مصنع إنتاج عبوات الفوم والشتلات الزراعية",
                "en": "Factory for the Production of Foam Containers and Agricultural Seedlings",
                "fr": "Usine de production de contenants en mousse et de plants agricoles"
              },
              {
                "id": 18,
                "ar": "عدد (6000) فدان لمشروعات الاستزراع السمكي",
                "en": "6,000 Feddans Allocated for Aquaculture Projects",
                "fr": "6 000 feddans alloués aux projets d’aquaculture"
              },
              {
                "id": 19,
                "ar": "مشروع استزراع سمكي أرضي بالفيروز – شرق بورسعيد",
                "en": "Land-Based Aquaculture Project at Al-Fayrouz – East Port Said",
                "fr": "Projet d’aquaculture terrestre à Al-Fayrouz – Port-Saïd Est"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/fisheries/1.webp",
                "title": "الشركة الوطنية للثروة السمكية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/fisheries/2.webp",
                "title": "الشركة الوطنية للثروة السمكية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/fisheries/3.webp",
                "title": "الشركة الوطنية للثروة السمكية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/fisheries/4.webp",
                "title": "الشركة الوطنية للثروة السمكية",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2014",
            "description_ar": "أنشئت الشركة عام 2014 بهدف المساهمة في سد الفجوة بين الإنتاج والاستهلاك من الأسماك وتوفير الأسماك بأسعار مناسبة من خلال التوسع في صيد وإنتاج الأسماك. تنتج الشركة منتجات الأسماك ومصنعات الأسماك وتغليفها وتعبئتها بأحدث الطرق العلمية الحديثة وتنتج أيضا الأعلاف الخاصة بالأسماك من خلال امتلاك الشركة أسطول للصيد البحري ومزارع سمكية وأقفاص بحرية ومصانع علف وتعبئة وتغليف وتصنيع الأسماك وكذلك إمتلاكها لمفارخ أسماك بحرية ومركز أبحاث وتطوير.",
            "description_en": "Company established in 2014 to contribute to bridging the gap between production and consumption of fish and provide fish at appropriate prices through expansion in fishing and fish production. The company produces fish products, fish processing, packaging and filling with the latest modern scientific methods, and also produces fish feed through the company's ownership of a marine fishing fleet, fish farms, marine cages, feed factories, packaging and fish processing, as well as its ownership of marine fish hatcheries and research and development center.",
            "description_fr": "Société créée en 2014 pour contribuer à combler l'écart entre la production et la consommation de poisson et fournir du poisson à des prix appropriés grâce à l'expansion de la pêche et de la production de poisson. L'entreprise produit des produits à base de poisson, transforme le poisson, l'emballe et le remplit selon les dernières méthodes scientifiques modernes, et produit également des aliments pour poissons grâce à la possession par l'entreprise d'une flotte de pêche maritime, de fermes piscicoles, de cages marines, d'usines d'aliments, d'emballage et de transformation du poisson, ainsi que sa possession d'écloseries de poissons marins et d'un centre de recherche et développement.",
            "products": [
              "الأسماك",
              "مصنعات الأسماك",
              "تغليف وتعبئة الأسماك",
              "أعلاف الأسماك",
              "مفارخ الأسماك البحرية"
            ],
            "contact": {
              "address": "6 شارع المأمون الخلافة – مصر الجديدة – القاهرة",
              "phone": "02/24483384",
              "fax": "02/24483383",
              "email": ""
            },
            "headquarter": {
              "address": "6 الخليفة المأمون - روكسى - مصر الجديدة",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مزرعة الديبة للإستزراع السمكي",
                "location": "مثلث الديبة غرب بور سعيد",
                "governorate": "بور سعيد"
              },
              {
                "unit_name": "مزرعة الفيروز للإستزراع السمكى",
                "location": "شرق التفريعة- بالوظة - شرق بور سعيد",
                "governorate": "شمال سيناء"
              },
              {
                "unit_name": "مشروع الأقفاص البحرية بشرق التفريعة",
                "location": "شرق التفريعة- بالوظة - شرق بور سعيد",
                "governorate": "شمال سيناء"
              },
              {
                "unit_name": "بحيرة البردويل (تنمية وتطوير البحيرة)",
                "location": "مرسى (التلول- إغزوان) طريق بئر العبد",
                "governorate": "شمال سيناء"
              },
              {
                "unit_name": "مرسى جرجوب (إستزراع التونة الزرقاء)",
                "location": "مرسى جرجوب - شمال النجيلة",
                "governorate": "مطروح"
              },
              {
                "unit_name": "الزعفرانة (إستزراع التونة الصفراء)",
                "location": "الزعفرانة - داخل البحر الأحمر",
                "governorate": "البحر الأحمر"
              },
              {
                "unit_name": "مصنع تعبئة وتعليب التونة",
                "location": "برج العرب",
                "governorate": "الأسكندرية"
              },
              {
                "unit_name": "مشروع مزارع ومرابى التماسيح",
                "location": "وادى كركر",
                "governorate": "أسوان"
              },
              {
                "unit_name": "مشروع المزارع السمكية بأسوان",
                "location": "بقبق",
                "governorate": "أسوان"
              },
              {
                "unit_name": "رئاسة قطاع غليون",
                "location": "الجزيرة الخضراء - غليون",
                "governorate": "كفر الشيخ"
              },
              {
                "unit_name": "عدد (1191) حوض استزراع سمكى - عدد (4) مصنع + مفرخ سمكى وعدد (5) معمل",
                "location": "بركة غليون",
                "governorate": "كفر الشيخ"
              }
            ],
            "locations": [
              {
                "location_ar": "(6 أ) الخليفة المأمون - روكسي - مصر الجديدة",
                "location_en": "(6 A) Al-Khalifa Al-Mamoun - Roxy - Heliopolis",
                "location_fr": "(6 A) Al-Khalifa Al-Mamoun - Roxy - Héliopolis",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "رئاسة الشركة",
                    "factory_en": "Company Headquarters",
                    "factory_fr": "Siège social de l'entreprise",
                    "products": []
                  }
                ]
              },
              {
                "location_ar": "مدينة بئر العبد - الساحل الشمالي لسيناء",
                "location_en": "Bir Al-Abd City - North Coast of Sinai",
                "location_fr": "Ville de Bir Al-Abd - Côte nord du Sinaï",
                "governorate_ar": "شمال سيناء",
                "governorate_en": "North Sinai",
                "governorate_fr": "Sinaï du Nord",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "قطع بحيرة البردويل",
                    "factory_en": "Bardawil Lake Sections",
                    "factory_fr": "Sections du lac Bardawil",
                    "products": [
                      {
                        "product_ar": "أسماك بحرية",
                        "product_en": "Marine fish",
                        "product_fr": "Poissons marins",
                        "product_image": "/assets/images/comp_factories/qaha/5.webp",
                        "capacity": 5000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "مثلث الديبة غرب بور سعيد",
                "location_en": "Al-Deba Triangle west of Port Said",
                "location_fr": "Triangle d'Al-Deba à l'ouest de Port-Saïd",
                "governorate_ar": "بور سعيد",
                "governorate_en": "Port Said",
                "governorate_fr": "Port-Saïd",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "مزرعة مثلث الديبة للإستزراع السمكي",
                    "factory_en": "Al-Deba Triangle Fish Farming Farm",
                    "factory_fr": "Ferme piscicole du triangle d'Al-Deba",
                    "products": [
                      {
                        "product_ar": "جمبري وأسماك",
                        "product_en": "Shrimp and fish",
                        "product_fr": "Crevettes et poissons",
                        "product_image": "/assets/images/comp_factories/qaha/6.webp",
                        "capacity": 1000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 24,
          "ar": "الشركة الوطنية المصرية للمشروعات الزراعية والتوريدات",
          "en": "National Egyptian Company for Agricultural Projects and Supplies",
          "fr": "Société nationale égyptienne pour les projets agricoles et les approvisionnements",
          "logo": "/assets/images/companies_logo/sinai.webp",
          "details": {
            "Gallary": [],
            "establishment_year": 2018,
            "description_ar": "تأسست الشركة بهدف تنفيذ المشروعات الزراعية وتوفير التوريدات اللازمة لقطاع الزراعة في مصر. تعمل الشركة على تنمية الثروة الزراعية وزيادة الإنتاجية من خلال استخدام أحدث التقنيات والأنظمة الزراعية.",
            "description_en": "The company was established with the aim of implementing agricultural projects and providing the necessary supplies for the agricultural sector in Egypt. The company works on developing agricultural wealth and increasing productivity through the use of the latest technologies and agricultural systems.",
            "description_fr": "La société a été créée dans le but de mettre en œuvre des projets agricoles et de fournir les approvisionnements nécessaires au secteur agricole en Égypte. La société travaille au développement de la richesse agricole et à l'augmentation de la productivité grâce à l'utilisation des dernières technologies et systèmes agricoles.",
            "locations": [
              {
                "location_ar": "المنطقة الصناعية - العاشر من رمضان",
                "location_en": "Industrial Zone - 10th of Ramadan",
                "location_fr": "Zone industrielle - 10 Ramadan",
                "governorate_ar": "الشرقية",
                "governorate_en": "Sharqia",
                "governorate_fr": "Charqia",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي",
                    "factory_en": "Main Headquarters",
                    "factory_fr": "Siège principal",
                    "products": []
                  },
                  {
                    "factory_ar": "مصنع التوريدات الزراعية",
                    "factory_en": "Agricultural Supplies Factory",
                    "factory_fr": "Usine d'approvisionnements agricoles",
                    "products": [
                      {
                        "product_ar": "مستلزمات زراعية",
                        "product_en": "Agricultural supplies",
                        "product_fr": "Fournitures agricoles",
                        "product_image": "/assets/images/Products/agricultural_supplies.webp",
                        "capacity": 50000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "",
              "governorate": ""
            },
            "units": []
          },
          "number_of_factories": 5
        },
        {
          "id": 25,
          "ar": "شركة لاكتو مصر لإنتاج ألبان الأطفال",
          "en": "Lacto Egypt for Children's Dairy Production",
          "fr": "Lacto Egypt pour la production de produits laitiers pour enfants",
          "logo": "/assets/images/companies_logo/LactoMisr.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/lacto/1.webp",
                "title": "شركة لاكتو مصر",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/lacto/2.webp",
                "title": "شركة لاكتو مصر",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/lacto/3.webp",
                "title": "شركة لاктو مصر",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/lacto/4.webp",
                "title": "شركة لاكتو مصر",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2020",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2020 بهدف بناء قاعدة قوية من الخامات الغذائية وإنتاج أفضل أنواع ألبان الأطفال المجففة والمواد الغذائية.",
            "description_en": "Egyptian joint stock company established in 2020 to build a strong base of food raw materials and produce the best types of dried infant milk and food materials.",
            "description_fr": "Société égyptienne par actions créée en 2020 pour construire une base solide de matières premières alimentaires et produire les meilleurs types de lait infantile séché et de matières alimentaires.",
            "products": [
              "ألبان الأطفال",
              "مبيض القهوة",
              "بودرة كريمة مضغوطة نباتية"
            ],
            "contact": {
              "address": "المنطقة الصناعية 2021 رقم 1# - المدينة العاشر من رمضان - الشرقية",
              "phone": "",
              "fax": "",
              "email": ""
            },

            "locations": [
              {
                "location_ar": "المنطقة الصناعية - السادس من أكتوبر",
                "location_en": "Industrial Zone - 6th of October",
                "location_fr": "Zone industrielle - 6 Octobre",
                "governorate_ar": "الجيزة",
                "governorate_en": "Giza",
                "governorate_fr": "Gizeh",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع لاكتو مصر",
                    "factory_en": "Lacto Egypt Factory",
                    "factory_fr": "Usine Lacto Egypt",
                    "products": [
                      {
                        "product_ar": "ألبان الأطفال",
                        "product_en": "Children's dairy",
                        "product_fr": "Produits laitiers pour enfants",
                        "product_image": "/assets/images/Products/children_dairy.webp",
                        "capacity": 10000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "المنطقة الصناعية 6أ -  رقم 131  مدينة العاشر من رمضان ",
              "governorate": "القاهرة"
            },
            "units": []
          },
          "number_of_factories": 5
        },
        {
          "id": 26,
          "ar": "شركة قها وإدفينا للصناعات الغذائية المتطورة",
          "en": "Qaha and Edfina for Advanced Food Industries",
          "fr": "Qaha et Edfina pour les industries alimentaires avancées",
          "logo": "/assets/images/companies_logo/KahaEdfina1.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/qaha/1.webp",
                "title": "شركة قها وإدفينا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/qaha/2.webp",
                "title": "شركة قها وإدفينا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/qaha/3.webp",
                "title": "شركة قها وإدفينا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/qaha/4.webp",
                "title": "شركة قها وإدفينا",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2021",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2021 بهدف تحقيق الاستفادة من المحاصيل الزراعية المحلية من خلال استغلال نصف مليون طن سنوياً وتلبية متطلبات السوق المحلى من الأصناف الأساسية وطرحها بالأسواق بأسعار تنافسية وتوفير منتجات غذائية تعتمد على بدائل البروتين الحيواني والتي تساعد في التخلص من الوزن الزائد والسيطرة على الأمراض المرتبطة وتعزيز قيمة المنتج الوطني في السوق المحلى وتطوير الفرص التصديرية بالإضافة إلى دعم المنظومة التموينية بالسلع الأساسية بأسعار مخفضة وتوفير فرص عمل وإعداد الكوادر المؤهلة للعمل في مجال التصنيع الغذائي.",
            "description_en": "Egyptian joint stock company established in 2020 to utilize local agricultural crops by processing 500,000 tons annually, meet local market requirements for basic varieties, offer them in markets at competitive prices, provide food products based on animal protein alternatives that help in weight loss and controlling related diseases, enhance the value of national products in the local market, develop export opportunities, support the supply system with basic commodities at reduced prices, and provide job opportunities and train qualified cadres for food manufacturing.",
            "description_fr": "Société égyptienne par actions créée en 2020 pour utiliser les cultures agricoles locales en transformant 500 000 tonnes annuellement, répondre aux exigences du marché local pour les variétés de base, les offrir sur les marchés à des prix compétitifs, fournir des produits alimentaires basés sur des alternatives protéiques animales qui aident à la perte de poids et au contrôle des maladies connexes, renforcer la valeur des produits nationaux sur le marché local, développer les opportunités d'exportation, soutenir le système d'approvisionnement en produits de base à prix réduits, et fournir des opportunités d'emploi et former des cadres qualifiés pour la fabrication alimentaire.",
            "products": [
              "الخضروات والفواكه المجمدة",
              "المربى",
              "الصلصة",
              "البقوليات المعلبة",
              "الدهون النباتية",
              "الوجبات الجاهزة",
              "الدقيق المعلب"
            ],
            "contact": {
              "address": "2020 - شارع سلام - الجودة - الجيزة",
              "phone": "",
              "fax": "",
              "email": "ahmed.salama@qaha-edfina.com"
            },
            "headquarter": {
              "address": "",
              "governorate": ""
            },
            "units": [],
            "locations": [
              {
                "location_ar": "مدينة قها - القليوبية",
                "location_en": "Qaha City - Qalyubia",
                "location_fr": "Ville de Qaha - Qalyubia",
                "governorate_ar": "القليوبية",
                "governorate_en": "Qalyubia",
                "governorate_fr": "Qalyubia",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع قها للصناعات الغذائية",
                    "factory_en": "Qaha Food Industries Factory",
                    "factory_fr": "Usine des industries alimentaires de Qaha",
                    "products": [
                      {
                        "product_ar": "منتجات غذائية متطورة",
                        "product_en": "Advanced food products",
                        "product_fr": "Produits alimentaires avancés",
                        "product_image": "/assets/images/comp_factories/qaha/3.webp",
                        "capacity": 15000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              },
              {
                "location_ar": "مدينة إدفينا - البحيرة",
                "location_en": "Edfina City - Beheira",
                "location_fr": "Ville d'Edfina - Beheira",
                "governorate_ar": "البحيرة",
                "governorate_en": "Beheira",
                "governorate_fr": "Beheira",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مصنع إدفينا للصناعات الغذائية",
                    "factory_en": "Edfina Food Industries Factory",
                    "factory_fr": "Usine des industries alimentaires d'Edfina",
                    "products": [
                      {
                        "product_ar": "منتجات غذائية متطورة",
                        "product_en": "Advanced food products",
                        "product_fr": "Produits alimentaires avancés",
                        "product_image": "/assets/images/comp_factories/qaha/2.webp",
                        "capacity": 12000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        }
      ]
    },
    {
      "sector_ar": "قطاع المقاولات والخدمات المتخصصة",
      "sector_en": "Contracting and Specialized Services Sector",
      "sector_fr": "Secteur des contrats et services spécialisés",
      "gradient": "from-blue-500/90 to-cyan-600/90",
      "companies": [
        {
          "id": 27,
          "ar": "الشركة الوطنية للمقاولات العامة والتوريدات",
          "en": "National General Contracting and Supplies Company",
          "fr": "Société nationale des contrats généraux et des approvisionnements",
          "logo": "/assets/images/companies_logo/Contract.webp",
          "link":"www.wataniacontracting.com.eg",

          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/contracting/1.webp",
                "title": "  متحف العريش",
                "description": "متحف حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/contracting/2.webp",
                "title": "  مول العاصمة بالمنوفية",
                "description": " مول حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/contracting/3.webp",
                "title": "  كلية دار العلوم",
                "description": "  جامعةالمنيا"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/contracting/4.webp",
                "title": "  المجلس القومي للمراة",
                "description": "المنيا"
              }
            ],
            "establishment_year": "1993",
            "description_ar": "أنشئت الشركة عام 1993 بهدف القيام بكافة أعمال المقاولات العامة والتوريدات والإنشاءات وأعمال المرافق والطرق والصيانة. تقوم الشركة بتنفيذ المشروعات والتوريدات المختلفة لجميع أجهزة الدولة في جميع المجالات المناسبة (أعمال المباني / الطرق والكبارى - أعمال الكهروميكانيكية والإلكترونية والشبكات / محطات وشبكات المياه/ الصرف الصحي / محطات تحلية ومعالجة بأنواعها / محطات مياه الشرب / محطات وشبكات الكهرباء / استصلاح الأراضي / أعمال السدود للحماية من مخاطر السيول / حفر الآبار).",
            "description_en": "Established in 1993 to carry out all general contracting, supplies, construction, utilities, roads and maintenance works. The company implements various projects and supplies for all state agencies in all appropriate fields (building works / roads and bridges - electromechanical, electronic and network works / water stations and networks / sewage / desalination and treatment plants of all types / drinking water plants / electricity stations and networks / land reclamation / dam works for flood risk protection / well drilling).",
            "description_fr": "Créée en 1993 pour réaliser tous les travaux de génie civil, fournitures, construction, services publics, routes et maintenance. La société met en œuvre divers projets et fournitures pour tous les organismes de l'État dans tous les domaines appropriés (travaux de bâtiment / routes et ponts - travaux électromécaniques, électroniques et réseaux / stations et réseaux d'eau / assainissement / usines de dessalement et de traitement de tous types / usines d'eau potable / stations et réseaux électriques / remise en état des terres / travaux de barrages pour la protection contre les risques d'inondation / forage de puits).",
            "products": [
              "المقاولات العامة",
              "التوريدات",
              "الإنشاءات",
              "أعمال المرافق",
              "أعمال الطرق",
              "الصيانة"
            ],
            "contact": {
              "address": "الأكيلوء E - طريق القاهرة السويس بجوار كوبري الجيش - المعادي - القاهرة",
              "phone": "02-26906143",
              "fax": " 02-26906140",
              "email": ""
            },
            "headquarter": {
              "address": "كم 4،5 الماظة",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "العباسية - القاهرة",
                "location_en": "Abbasia - Cairo",
                "location_fr": "Abbasia - Le Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي",
                    "factory_en": "Main Headquarters",
                    "factory_fr": "Siège principal",
                    "products": []
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 28,
          "ar": "الشركة الوطنية لإنشاء وتنمية وإدارة الطرق",
          "en": "National Company for Road Construction, Development and Management",
          "fr": "Société nationale pour la construction, le développement et la gestion des routes",
          "logo": "/assets/images/companies_logo/Road1.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/roads/1.webp",
                "title": "الشركة الوطنية للطرق",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/roads/2.webp",
                "title": "الشركة الوطنية للطرق",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/roads/3.webp",
                "title": "الشركة الوطنية للطرق",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/roads/4.webp",
                "title": "الشركة الوطنية للطرق",
                "description": "شركة حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2001",
            "description_ar": "أنشئت الشركة عام 2002 بهدف إنشاء وإدارة وتنمية وصيانة الطرق لتحقيق الأمان والراحة التامة لرواد الطرق السريعة وأيضاً الموازين في عدد 18 طريق بإجمالي أطوال 6325 كم. قامت الشركة بتطوير مجموعة من أهم الطرق الكبرى ومنها طريق القاهرة الإسكندرية الصحراوي وطريق العين السخنة والطريق الدائري الإقليمي والدائري الأوسط وغيرها من الطرق الهامة. وفي أغسطس 2021 افتتحت سلسلة محطات شل أوت التابعة للشركة أول محطة بنزين بحرية في مصر لتموين المراكب واليخوت بمراسي في الساحل الشمالي.",
            "description_en": "Established in 2002 to create, manage, develop and maintain roads to achieve complete safety and comfort for highway users and also weighing stations in 18 roads with total lengths of 6325 km. The company has developed a group of the most important major roads including Cairo-Alexandria Desert Road, Ain Sokhna Road, Regional Ring Road, Middle Ring Road and other important roads. In August 2021, the company's Shell Out station chain opened the first marine gas station in Egypt to supply boats and yachts in marinas on the North Coast.",
            "description_fr": "Créée en 2002 pour créer, gérer, développer et entretenir les routes afin d'assurer une sécurité et un confort complets aux usagers des autoroutes et également aux stations de pesage sur 18 routes d'une longueur totale de 6325 km. La société a développé un groupe des routes principales les plus importantes, notamment la route désertique Le Caire-Alexandrie, la route d'Aïn Sokhna, la rocade régionale, la rocade médiane et autres routes importantes. En août 2021, la chaîne de stations Shell Out de la société a ouvert la première station-service marine en Égypte pour approvisionner les bateaux et les yachts dans les marinas de la côte nord.",
            "products": [
              "إنشاء الطرق",
              "إدارة الطرق",
              "صيانة الطرق",
              "محطات الوقود",
              "محطات الخدمة"
            ],
            "contact": {
              "address": "امتداد رمسيس - المجمع الإداري - عمارة (ب) - مدينة نصر - القاهرة",
              "phone": "02/22631794 - 02/22631846",
              "fax": "02/22632316",
              "email": ""
            },
            "headquarter": {
              "address": "عمارة (ب) - ش إمتداد رمسيس (2)",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "قيادة طر القاهرة / العين السخنة",
                "location": "طر القاهرة / العين السخنة",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر الصعيد الحر",
                "location": "طر الصعيد الحر",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر الدائرى الإقليمي",
                "location": "طر الدائرى الإقليمي",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر القاهرة / الإسكندرية الصحراوي",
                "location": "طر القاهرة / الإسكندرية الصحراوي",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر القاهرة /الإسماعيلية",
                "location": "طر القاهرة /الإسماعيلية",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر الإقليمى الإسماعيلية / بورسعيد",
                "location": "طر الإسماعيلية / بورسعيد",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر القاهرة / السويس",
                "location": "طر القاهرة / السويس",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر روض الفرج / الضبعة",
                "location": "طر روض الفرج / الضبعة",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر أسيوط الغربي",
                "location": "طر أسيوط الغربي",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر القاهرة / الفيوم",
                "location": "طر القاهرة / الفيوم",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر الأسكندرية الزراعي",
                "location": "طر الأسكندرية الزراعي",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة طر شبرا / بنها",
                "location": "طر شبرا / بنها",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة الطريق الأوسطي",
                "location": "الطريق الأوسطي",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "قيادة محور 30 يونيو",
                "location": "محور 30 يونيو",
                "governorate": "غير محدد"
              },
              {
                "unit_name": "محطات خدمة وتموين سيارات (شل أوت)",
                "location": "مختلف محافظات الجمهورية",
                "governorate": "غير محدد"
              }
            ],
            "locations": [
              {
                "location_ar": "مدينة نصر - القاهرة",
                "location_en": "Nasr City - Cairo",
                "location_fr": "Ville Nasr - Le Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي",
                    "factory_en": "Main Headquarters",
                    "factory_fr": "Siège principal",
                    "products": []
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 29,
          "ar": "الشركة الوطنية للمعارض والمؤتمرات الدولية",
          "en": "National Company for International Exhibitions and Conferences",
          "fr": "Société nationale des expositions et conférences internationales",
          "logo": "/assets/images/companies_logo/WEIC.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/exhibitions/1.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/exhibitions/2.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/exhibitions/3.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/exhibitions/4.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/exhibitions/5.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/exhibitions/6.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/exhibitions/7.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/exhibitions/8.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/exhibitions/9.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/exhibitions/10.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/exhibitions/11.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/exhibitions/12.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 13,
                "url": "/assets/images/comp_factories/exhibitions/13.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 14,
                "url": "/assets/images/comp_factories/exhibitions/14.webp",
                "title": "الشركة الوطنية للمعارض",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2017",
            "description_ar": "أنشئت الشركة عام 2017 بهدف إدارة المعارض والمؤتمرات الخاصة بالقوات المسلحة وتشجيع إقامة المعارض والمؤتمرات الدولية والإقليمية والمحلية. تقوم الشركة بتنفيذ فعاليات الاحتفالات في المناسبات الوطنية والدينية/ الاجتماعية وكذلك الأنشاطات الترفيهية واستضافة العروض والأعمال الفنية / المسرحية واستقدام الفرق الفنية المتميزة محلياً وعالمياً.",
            "description_en": "Established in 2017 to manage exhibitions and conferences for the Armed Forces and encourage the establishment of international, regional and local exhibitions and conferences. The company implements celebration events on national and religious/social occasions as well as entertainment activities, hosting artistic/theatrical shows and works, and bringing distinguished artistic teams locally and internationally.",
            "description_fr": "Créée en 2017 pour gérer les expositions et conférences pour les Forces armées et encourager l'établissement d'expositions et de conférences internationales, régionales et locales. La société met en œuvre des événements de célébration lors d'occasions nationales et religieuses/sociales ainsi que des activités de divertissement, accueille des spectacles et œuvres artistiques/théâtrales et fait venir des équipes artistiques distinguées localement et internationalement.",
            "products": [
              "إدارة المعارض",
              "تنظيم المؤتمرات",
              "الفعاليات والاحتفالات",
              "العروض الفنية"
            ],
            "contact": {
              "address": "محور المشير طنطاوي - التجمع الخامس - القاهرة الجديدة - القاهرة",
              "phone": "+2 240 120 48 / 51 / 53 / 59",
              "fax": "",
              "email": "info@manara-conferences.com"
            },
            "headquarter": {
              "address": "محور المشير طنطاوى التجمع الخامس",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مركز المنارة للمؤتمرات والدولية",
                "location": "محور المشير طنطاوى التجمع الخامس",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "مركز مصر للمعارض الدولية",
                "location": "غير مذكور",
                "governorate": "غير محدد"
              }
            ],
            "locations": [
              {
                "location_ar": "مدينة القاهرة الجديدة",
                "location_en": "New Cairo City",
                "location_fr": "Nouvelle ville du Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي",
                    "factory_en": "Main Headquarters",
                    "factory_fr": "Siège principal",
                    "products": []
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 30,
          "ar": "الشركة الوطنية للفنادق والخدمات السياحية توليب",
          "en": "National Tulip Hotels and Tourism Services Company",
          "fr": "Société nationale Tulip des hôtels et services touristiques",
          "logo": "/assets/images/companies_logo/Tolip.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/tolip/1.webp",
                "title": "الشركة الوطنية للفنادق توليب",
                "description": "شركة رائدة في مجال الضيافة والفنادق"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/tolip/2.webp",
                "title": "الشركة الوطنية للفنادق توليب",
                "description": "شركة رائدة في مجال الضيافة والفنادق"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/tolip/3.webp",
                "title": "الشركة الوطنية للفنادق توليب",
                "description": "شركة رائدة في مجال الضيافة والفنادق"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/tolip/4.webp",
                "title": "الشركة الوطنية للفنادق توليب",
                "description": "شركة رائدة في مجال الضيافة والفنادق"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "أنشئت الشركة عام 2018 بهدف الحصول على الريادة في مجال الخدمات الفندقية والسياحية محلياً وعالمياً. تعمل الشركة في مجال إدارة وتشغيل الفنادق والمنشآت السياحية مع تقديم طابع خاص من الخدمة الفندقية عالية الجودة.",
            "description_en": "Established in 2018 to obtain leadership in hotel and tourism services locally and globally. The company works in managing and operating hotels and tourist establishments while providing a special character of high-quality hotel service.",
            "description_fr": "Créée en 2018 pour obtenir le leadership dans les services hôteliers et touristiques localement et mondialement. La société travaille dans la gestion et l'exploitation d'hôtels et d'établissements touristiques tout en fournissant un caractère spécial de service hôtelier de haute qualité.",
            "products": [
              "إدارة الفنادق",
              "تشغيل المنشآت السياحية",
              "الخدمات الفندقية"
            ],
            "contact": {
              "address": "فندق النرجس - شارع التسعين - التجمع الخامس - القاهرة الجديدة - القاهرة",
              "phone": "02/26180107",
              "fax": "",
              "email": "ceo@tolip-eg.com"
            },
            "headquarter": {
              "address": "فندق النرجس - شارع التسعين - التجمع الخامس - القاهرة الجديدة - القاهرة",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "فندق توليب القاهرة",
                "location_en": "Tulip Hotel Cairo",
                "location_fr": "Hôtel Tulip Le Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "فندق توليب الرئيسي",
                    "factory_en": "Main Tulip Hotel",
                    "factory_fr": "Hôtel Tulip principal",
                    "products": [
                      {
                        "product_ar": "خدمات فندقية وسياحية",
                        "product_en": "Hotel and tourism services",
                        "product_fr": "Services hôteliers et touristiques",
                        "product_image": "/assets/images/Products/hotel_services.webp",
                        "capacity": 500,
                        "unit_ar": "غرفة",
                        "unit_en": "rooms",
                        "unit_fr": "chambres"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
       
       
        {
          "id": 33,
          "ar": "شركة النصر للخدمات والصيانة \"كوين سيرفيس\"",
          "en": "Al Nasr for Services and Maintenance \"Queen Service\"",
          "fr": "Al Nasr pour les services et la maintenance \"Queen Service\"",
          "logo": "/assets/images/companies_logo/Queen service1.webp",
          "link":"www.egyptian-steel.com",

          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/queen_service/1.webp",
                "title": "شركة النصر للخدمات والصيانة",
                "description": "مجال الأمن و الحراسة"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/queen_service/2.webp",
                "title": "شركة النصر للخدمات والصيانة",
                "description": "مجال شئون البيئة"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/queen_service/3.webp",
                "title": "شركة النصر للخدمات والصيانة",
                "description": "مجال النقل البري"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/queen_service/4.webp",
                "title": "شركة النصر للخدمات والصيانة",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "1987",
            "description_ar": "أنشئت الشركة عام 1988 بهضم تقديم ونتائج حزم الخدمات المختلفة باستخدام المعدات ووسائل التكنولوجيا الحديثة والعمالة الفنية المدربة. تقوم الشركة بالعمل في مجالات الأمن والحراسة المتكاملة والنظافة والتطهير والنجارة ورعاية المسطحات الخضراء والعمل في مجال تجارة المعادن الجديدة والقديمة (بكافة أنواعها) وتنفيذ مجالات النقل البري إلى كافة محافظات الجمهورية بالإضافة إلى العمل في مجال التوريدات الغذائية للفنادق السياحية والفنادق والمستشفيات كما تقوم بتأجير الحاويات / الكرفانات المجهزة (مكاتب - مبيتات - مراكز اتصال - منافذ بيع - دورات مياه) وتنفيذ أعمال التوريدات العمومية عدا (الأجهزة الطبية - أجهزة الحواسب) وتقديم خدمات التموين البحرية والجافة بالإضافة إلى إنشاء وتجهيز (أماكن المؤتمرات - الاجتماعات - الاحتفالات - المناسبات القومية) مع توفير التأمين الإداري والأمني لها.",
            "description_en": "Established in 1988 to provide and implement various service packages using equipment, modern technology means and trained technical labor. The company works in the fields of integrated security and guarding, cleaning and sterilization, carpentry, green spaces care, trading in new and old metals (all types), implementing land transport to all governorates of the Republic, in addition to working in food supplies for tourist hotels, hotels and hospitals, renting containers/equipped caravans (offices - accommodations - call centers - sales outlets - toilets), implementing public supply works except (medical devices - computer devices), providing marine and dry catering services, in addition to establishing and equipping (conference venues - meetings - celebrations - national occasions) with providing administrative and security insurance.",
            "description_fr": "Créée en 1988 pour fournir et mettre en œuvre divers forfaits de services en utilisant des équipements, des moyens technologiques modernes et une main-d'œuvre technique formée. La société travaille dans les domaines de la sécurité et de la garde intégrées, du nettoyage et de la stérilisation, de la menuiserie, de l'entretien des espaces verts, du commerce des métaux neufs et anciens (tous types), de la mise en œuvre du transport terrestre vers tous les gouvernorats de la République, en plus du travail dans les approvisionnements alimentaires pour les hôtels touristiques, les hôtels et les hôpitaux, de la location de conteneurs/caravanes équipées (bureaux - hébergements - centres d'appels - points de vente - toilettes), de la mise en œuvre des travaux d'approvisionnement public sauf (dispositifs médicaux - ordinateurs), de la fourniture de services de restauration maritime et sèche, en plus de la création et de l'équipement (lieux de conférence - réunions - célébrations - occasions nationales) avec fourniture d'assurance administrative et de sécurité.",
            "products": [
              "الخدمات الأمنية",
              "النظافة والتطهير",
              "النجارة",
              "رعاية المسطحات الخضراء",
              "تجارة المعادن",
              "النقل البري",
              "التوريدات الغذائية",
              "تأجير الحاويات والكرفانات",
              "التموين البحري والجاف",
              "تنظيم المؤتمرات والفعاليات"
            ],
            "contact": {
              "address": "1 طريق النصر - بدوار فندق الدليل الأحمر - مدينة نصر - القاهرة",
              "phone": " 02-23426929",
              "fax": "02-23426929",
              "email": "qs@queenservice.com.eg"
            },
            "headquarter": {
              "address": "عمارة 21 طريق النصر - الأوتوستراد",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "فوج الإمداد بالافراد",
                "location": "كم 4،5 الماظة",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "فرع الشركة بالإسكندرية",
                "location": "السوق التجاري- إسكان ضباط مصطفى كامل",
                "governorate": "الإسكندرية"
              },
              {
                "unit_name": "فرع الشركة بالقناة (السويس)",
                "location": "عمارة الأمن شقة رقم (1) - حوض الدرس",
                "governorate": "السويس"
              },
              {
                "unit_name": "فرع الشركة بالإسماعيلية",
                "location": "95 عمارات الشروق للضباط - شقة (11)",
                "governorate": "الإسماعيلية"
              },
              {
                "unit_name": "فرع الشركة بالغردقة",
                "location": "ش المصالح الحكومية - أمام مديرية الزراعة",
                "governorate": "الغردقة"
              },
              {
                "unit_name": "فرع الشركة بالزقازيق",
                "location": "5 ش الهدى - القومية - الزقازيق",
                "governorate": "الشرقية"
              },
              {
                "unit_name": "فرع الشركة بالصعيد (المنيا)",
                "location": "ميدان الساعة - أمام مطبعة بورسعيد",
                "governorate": "المنيا"
              },
              {
                "unit_name": "فرع الشركة بالعاشر من رمضان",
                "location": "العاشر من رمضان",
                "governorate": "الشرقية"
              },
              {
                "unit_name": "فرع الشركة بالمنصورة",
                "location": "المنصورة",
                "governorate": "الدقهلية"
              }
            ],
            "locations": [
              {
                "location_ar": "مدينة العبور - القليوبية",
                "location_en": "Al Obour City - Qalyubia",
                "location_fr": "Ville d'Al Obour - Qalyubia",
                "governorate_ar": "القليوبية",
                "governorate_en": "Qalyubia",
                "governorate_fr": "Qalyubia",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المركز الرئيسي للخدمات",
                    "factory_en": "Main Services Center",
                    "factory_fr": "Centre de services principal",
                    "products": [
                      {
                        "product_ar": "خدمات الصيانة والدعم الفني",
                        "product_en": "Maintenance and technical support services",
                        "product_fr": "Services de maintenance et support technique",
                        "product_image": "/assets/images/Products/maintenance_services.webp",
                        "capacity": 5000,
                        "unit_ar": "خدمة/عام",
                        "unit_en": "services/year",
                        "unit_fr": "services/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 34,
          "ar": "الشركة الوطنية لخدمات الإتصالات",
          "en": "National Telecommunications Services Company",
          "fr": "Société nationale des services de télécommunications",
          "logo": "/assets/images/companies_logo/Satellite_Final.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/telecom/1.webp",
                "title": "الشركة الوطنية لخدمات الإتصالات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/telecom/2.webp",
                "title": "الشركة الوطنية لخدمات الإتصالات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/telecom/3.webp",
                "title": "الشركة الوطنية لخدمات الإتصالات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/telecom/4.webp",
                "title": "الشركة الوطنية لخدمات الإتصالات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2019",
            "description_ar": "أنشئت الشركة عام 2017 بهدف تدعيم البنية الأساسية لخدمات الاتصالات ونظم المعلومات للمناطق المحرومة من هذه الخدمات أو التي تصلها الخدمات بمستوى ضعيف. تقوم الشركة بتقديم خدمات الاتصالات بكافة أنواعها وذلك باستخدام الحمول التجاري لنقمر الصناعي (طيبة) بالإضافة إلى كافة أنشطة الاتصالات السلكية واللاسلكية والميكروويف.",
            "description_en": "Established in 2017 to strengthen the infrastructure for communications services and information systems for areas deprived of these services or where services are provided at a weak level. The company provides all types of communication services using the commercial payload of the Tiba satellite in addition to all wired, wireless and microwave communication activities.",
            "description_fr": "Créée en 2017 pour renforcer l'infrastructure des services de communication et des systèmes d'information pour les zones privées de ces services ou où les services sont fournis à un niveau faible. La société fournit tous types de services de communication en utilisant la charge utile commerciale du satellite Tiba en plus de toutes les activités de communication filaire, sans fil et micro-ondes.",
            "products": [
              "خدمات الاتصالات السلكية",
              "خدمات الاتصالات اللاسلكية",
              "خدمات الميكروويف",
              "خدمات الأقمار الصناعية"
            ],
            "contact": {
              "address": "قاعدة  المشير حسين طنطاوى (الهايكستب  – طريق القاهرة / الإسماعيلية الصحراوي، القاهرة‑مصر",
              "phone": "+202 44770051 / +202 44770052",
              "fax": "+202 44770050",
              "mobile": "01111411359",
              "email": "ncts@nspo.com.eg"
            },
            "headquarter": {
              "address": "قطاع الهايكستب",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المدينة الذكية - القاهرة",
                "location_en": "Smart Village - Cairo",
                "location_fr": "Smart Village - Le Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مركز بيانات رئيسي",
                    "factory_en": "Main Data Center",
                    "factory_fr": "Centre de données principal",
                    "products": [
                      {
                        "product_ar": "خدمات اتصالات وحلول رقمية",
                        "product_en": "Telecommunications services and digital solutions",
                        "product_fr": "Services de télécommunications et solutions numériques",
                        "product_image": "/assets/images/Products/telecom_services.webp",
                        "capacity": 100000,
                        "unit_ar": "خدمة/عام",
                        "unit_en": "services/year",
                        "unit_fr": "services/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 35,
          "ar": "الشركة الوطنية لإستثمارات سيناء",
          "en": "National Sinai Investments Company",
          "fr": "Société nationale des investissements du Sinaï",
          "logo": "/assets/images/companies_logo/watanyaInvest.webp",
          "details": {
            "Gallary": [],
            "establishment_year": "2016",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2016 بهدف تنمية شبه جزيرة سيناء. تقوم الشركة بإقامة وتنفيذ مشروعات في كافة مجالات الاستثمارات والتنمية الصناعية والزراعية والسياحية والإنتاجية والخدمية.",
            "description_en": "An Egyptian joint stock company established in 2016 to develop the Sinai Peninsula. The company establishes and implements projects in all fields of investments, industrial, agricultural, tourist, productive and service development.",
            "description_fr": "Une société égyptienne par actions créée en 2016 pour développer la péninsule du Sinaï. La société établit et met en œuvre des projets dans tous les domaines des investissements, du développement industriel, agricole, touristique, productif et des services.",
            "products": [
              "المشروعات الاستثمارية",
              "التنمية الصناعية",
              "التنمية الزراعية",
              "المشروعات السياحية",
              "المشروعات الخدمية"
            ],
            "contact": {
              "address": "مبنى الجهاز الوطني لتنمية سيناء - العريش - شمال سيناء",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "مبنى الجهاز الوطنى لتنمية سيناء, ش الفتح - الدور 3 - العريش",
              "governorate": "شمال سيناء"
            },
            "units": [
              {
                "unit_name": "مكتب القاهرة",
                "location": "15 ش إحسان عبد القدوس عمارة الإستاد مدخل 2 الدور 7- عمارات العبور- م نصر",
                "governorate": "القاهرة"
              }
            ],
            "locations": [
              {
                "location_ar": "العريش - شمال سيناء",
                "location_en": "Al-Arish - North Sinai",
                "location_fr": "Al-Arish - Sinaï du Nord",
                "governorate_ar": "شمال سيناء",
                "governorate_en": "North Sinai",
                "governorate_fr": "Sinaï du Nord",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي للاستثمارات",
                    "factory_en": "Main Investments Headquarters",
                    "factory_fr": "Siège principal des investissements",
                    "products": [
                      {
                        "product_ar": "مشروعات تنموية واستثمارية",
                        "product_en": "Development and investment projects",
                        "product_fr": "Projets de développement et d'investissement",
                        "product_image": "/assets/images/Products/investment_projects.webp",
                        "capacity": 50,
                        "unit_ar": "مشروع/عام",
                        "unit_en": "projects/year",
                        "unit_fr": "projets/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 36,
          "ar": "شركة شرق بورسعيد للتنمية المتكاملة",
          "en": "East Port Said Integrated Development Company",
          "fr": "Société de développement intégré d'East Port Said",
          "logo": "/assets/images/companies_logo/EastPortSaid1.webp",
          "details": {
            "Gallary": [],
            "establishment_year": "2016",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2016 بهدف تنمية المنطقة الصناعية لمشروع قناة السويس الجديد. تقوم الشركة بإدارة وتنمية وتطوير وتسويق وتشغيل المناطق والمجتمعات الصناعية وصيانة وتشغيل المرافق في المنطقة الاقتصادية بقناة السويس.",
            "description_en": "An Egyptian joint stock company established in 2016 to develop the industrial zone of the New Suez Canal project. The company manages, develops, markets and operates industrial areas and communities, and maintains and operates utilities in the Suez Canal Economic Zone.",
            "description_fr": "Une société égyptienne par actions créée en 2016 pour développer la zone industrielle du projet du Nouveau Canal de Suez. La société gère, développe, commercialise et exploite les zones et communautés industrielles, et entretient et exploite les services publics dans la Zone économique du Canal de Suez.",
            "products": [
              "إدارة المناطق الصناعية",
              "تطوير المجتمعات الصناعية",
              "تشغيل المرافق",
              "صيانة البنية التحتية"
            ],
            "contact": {
              "address": "التوزيعات الشمالية للمنطقة الصناعية - مدينة أكتوبر - الجيزة",
              "phone": "+20 2 2268 3666 / +20 106 07 1222",
              "fax": "",
              "email": "info@ep_egypt.com"
            },
            "headquarter": {
              "address": "مبنى خدمة المستثمرين / المنطقة الإقتصادية لقناة السويس",
              "governorate": "بورسعيد"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "شرق بورسعيد",
                "location_en": "East Port Said",
                "location_fr": "East Port Said",
                "governorate_ar": "بورسعيد",
                "governorate_en": "Port Said",
                "governorate_fr": "Port-Saïd",
                "formation_ar": "ج 2 ميد",
                "formation_en": "J 2 Med",
                "formation_fr": "J 2 Med",
                "factories": [
                  {
                    "factory_ar": "المنطقة الصناعية بشرق بورسعيد",
                    "factory_en": "Industrial Zone in East Port Said",
                    "factory_fr": "Zone industrielle d'East Port Said",
                    "products": [
                      {
                        "product_ar": "مشروعات تنموية متكاملة",
                        "product_en": "Integrated development projects",
                        "product_fr": "Projets de développement intégrés",
                        "product_image": "/assets/images/Products/development_projects.webp",
                        "capacity": 25,
                        "unit_ar": "مشروع/عام",
                        "unit_en": "projects/year",
                        "unit_fr": "projets/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 37,
          "ar": "شركة العاصمة الإدارية",
          "en": "New Administrative Capital Company",
          "fr": "Société de la nouvelle capitale administrative",
          "logo": "/assets/images/companies_logo/AdministrativeCapital1.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/capital/1.webp",
                "title": "شركة العاصمة الإدارية",
                "description": "مشروع قومي حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/capital/2.webp",
                "title": "شركة العاصمة الإدارية",
                "description": "مشروع قومي حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/capital/3.webp",
                "title": "شركة العاصمة الإدارية",
                "description": "مشروع قومي حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/capital/4.webp",
                "title": "شركة العاصمة الإدارية",
                "description": "مشروع قومي حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2016",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2016 بهدف تطوير القاهرة وجعلها مركز ثقافي واقتصادي لمنطقة الشرق الأوسط وشمال أفريقيا من خلال بيئة اقتصادية مزدهرة تدعمها الأنشطة الاقتصادية المتنوعة. تعمل الشركة في مجال تنمية المناطق العمرانية وإنشاء وتنمية وإدارة وتطوير وتسويق وتشغيل العاصمة الإدارية الجديدة.",
            "description_en": "An Egyptian joint stock company established in 2016 to develop Cairo and make it a cultural and economic center for the Middle East and North Africa region through a prosperous economic environment supported by diverse economic activities. The company works in developing urban areas, creating, developing, managing, marketing and operating the new administrative capital.",
            "description_fr": "Une société égyptienne par actions créée en 2016 pour développer Le Caire et en faire un centre culturel et économique pour la région du Moyen-Orient et de l'Afrique du Nord grâce à un environnement économique prospère soutenu par des activités économiques diversifiées. La société travaille dans le développement des zones urbaines, la création, le développement, la gestion, la commercialisation et l'exploitation de la nouvelle capitale administrative.",
            "products": [
              "التنمية العمرانية",
              "إدارة المدن",
              "تطوير البنية التحتية",
              "تسويق المشروعات العمرانية"
            ],
            "contact": {
              "address": "مبنى رقم 3al2 - الحي الحكومي - العاصمة الإدارية الجديدة - القاهرة",
              "phone": "02/24041320",
              "fax": "02/24041321",
              "email": ""
            },
            "headquarter": {
              "address": "فندق توليب النرجس / القاهرة الجديدة",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "العاصمة الإدارية الجديدة",
                "location_en": "New Administrative Capital",
                "location_fr": "Nouvelle capitale administrative",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي للشركة",
                    "factory_en": "Company Main Headquarters",
                    "factory_fr": "Siège social principal de l'entreprise",
                    "products": []
                  },
                  {
                    "factory_ar": "المجمع الوزاري",
                    "factory_en": "Ministerial Complex",
                    "factory_fr": "Complexe ministériel",
                    "products": [
                      {
                        "product_ar": "مباني حكومية وإدارية",
                        "product_en": "Government and administrative buildings",
                        "product_fr": "Bâtiments gouvernementaux et administratifs",
                        "product_image": "/assets/images/Products/government_buildings.webp",
                        "capacity": 34,
                        "unit_ar": "مبنى وزاري",
                        "unit_en": "ministerial buildings",
                        "unit_fr": "bâtiments ministériels"
                      }
                    ]
                  },
                  {
                    "factory_ar": "المنطقة السكنية",
                    "factory_en": "Residential Area",
                    "factory_fr": "Zone résidentielle",
                    "products": [
                      {
                        "product_ar": "وحدات سكنية",
                        "product_en": "Residential units",
                        "product_fr": "Unités résidentielles",
                        "product_image": "/assets/images/Products/residential_units.webp",
                        "capacity": 50000,
                        "unit_ar": "وحدة سكنية",
                        "unit_en": "residential units",
                        "unit_fr": "unités résidentielles"
                      }
                    ]
                  },
                  {
                    "factory_ar": "المنطقة المركزية للأعمال",
                    "factory_en": "Central Business District",
                    "factory_fr": "District central des affaires",
                    "products": [
                      {
                        "product_ar": "أبراج تجارية وإدارية",
                        "product_en": "Commercial and administrative towers",
                        "product_fr": "Tours commerciales et administratives",
                        "product_image": "/assets/images/Products/business_towers.webp",
                        "capacity": 20,
                        "unit_ar": "برج",
                        "unit_en": "towers",
                        "unit_fr": "tours"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        }
      ]
    },
    {
      "sector_ar": "قطاع التجارة الداخلية والخارجية",
      "sector_en": "Domestic and Foreign Trade Sector",
      "sector_fr": "Secteur du commerce intérieur et extérieur",
      "gradient": "from-blue-500/90 to-cyan-600/90",
      "companies": [
        {
          "id": 38,
          "ar": "مصنع إنتاج المشمعات البلاستيك",
          "en": "Plastic Sheets Production Factory",
          "fr": "Usine de production de feuilles plastiques",
          "logo": "/assets/images/companies_logo/Plastic.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "تسويق منتجات الشركة من البطاريات بعدد (50) ألف بطارية/عام، طاقة الشركة حالياً (105) ألف بطارية/عام وستصل إلى (150) ألف بطارية/عام",
                "en": "Marketing the Company's Battery Products at 50,000 Batteries/Year; Current Company Capacity is 105,000 Batteries/Year, Expected to Reach 150,000 Batteries/Year",
                "fr": "Commercialisation des produits de batterie de l’entreprise à 50 000 batteries/an ; capacité actuelle de l’entreprise 105 000 batteries/an, prévue d’atteindre 150 000 batteries/an"
              },
              {
                "id": 2,
                "ar": "الشراكة في مصنع لإنتاج مشمعات الصوب الزراعية والصناعات البلاستيكية المختلفة مع مستثمر يمتلك مصنع بخطوط إنتاج",
                "en": "Partnership in a Factory for Producing Greenhouse Plastic Sheets and Various Plastic Products with an Investor Owning a Factory with Production Lines",
                "fr": "Partenariat dans une usine de production de bâches pour serres et divers produits plastiques avec un investisseur possédant une usine avec lignes de production"
              }
            ],
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/plastic_sheets/1.webp",
                "title": "مصنع إنتاج المشمعات البلاستيك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/plastic_sheets/2.webp",
                "title": "مصنع إنتاج المشمعات البلاستيك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/plastic_sheets/3.webp",
                "title": "مصنع إنتاج المشمعات البلاستيك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/plastic_sheets/4.webp",
                "title": "مصنع إنتاج المشمعات البلاستيك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/plastic_sheets/5.webp",
                "title": "مصنع إنتاج المشمعات البلاستيك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/plastic_sheets/6.webp",
                "title": "مصنع إنتاج المشمعات البلاستيك",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "1993",
            "description_ar": "تم إنشاء المصنع عام 1993 بهدف تغطية مطالب القوات المسلحة من منتجات البلاستيك عالي ومنخفض الكثافة بطاقة إنتاجية 300 طن/عام لطرح الفائض للقطاع المدني. يتم العمل على إنتاج أنواع مختلفة من منتجات البولي إيثيلين (أكياس خدمة الشاشّة-التعبئة-التغليف-الفيلم الزراعي فائق الجودة-الملش-شركة أكياس المحرقة).",
            "description_en": "The factory was established in 1993 to meet the demands of the Armed Forces for high and low-density plastic products with a production capacity of 300 tons/year and to offer the surplus to the civilian sector. The factory produces various types of polyethylene products (service bags, packaging, high-quality agricultural film, and other polyethylene items).",
            "description_fr": "L'usine a été créée en 1993 pour répondre aux besoins des Forces armées en produits plastiques à haute et basse densité avec une capacité de production de 300 tonnes/an et pour proposer le surplus au secteur civil. L'usine produit divers types de produits en polyéthylène (sacs de service, emballage, film agricole de haute qualité et autres articles en polyéthylène).",
            "products": [
              "أكياس خدمة الشاشّة",
              "التعبئة",
              "التغليف",
              "الفيلم الزراعي فائق الجودة",
              "الملش",
              "أكياس المحرقة"
            ],
            "contact": {
              "address": "الكيلو 4.5 طريق القاهرة - السويس بجوار كوبري الجيش - القاهرة",
              "phone": "(+20) 2 26750749",
              "fax": "(+20) 2 26750749"
            },
            "headquarter": {
              "address": "كم 4،5 الماظة",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المنطقة الصناعية - السادات",
                "location_en": "Industrial Zone - Sadat City",
                "location_fr": "Zone industrielle - Ville Sadat",
                "governorate_ar": "المنوفية",
                "governorate_en": "Menoufia",
                "governorate_fr": "Menoufia",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع المشمعات البلاستيك",
                    "factory_en": "Plastic Sheets Factory",
                    "factory_fr": "Usine de feuilles plastiques",
                    "products": [
                      {
                        "product_ar": "مشمعات بلاستيكية متنوعة",
                        "product_en": "Various plastic sheets",
                        "product_fr": "Feuilles plastiques diverses",
                        "product_image": "/assets/images/Products/plastic_sheets.webp",
                        "capacity": 5000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 39,
          "ar": "الشركة الوطنية للمشروعات الإنتاجية (صافى)",
          "en": "National Productive Projects Company (Safi)",
          "fr": "Société nationale des projets productifs (Safi)",
          "logo": "/assets/images/companies_logo/safi.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "استثمار مسطحات لعدد (2) مبنى بمشروع بشاير الخير – الإسكندرية",
                "en": "Investment in Two Buildings at Bashayer El Khair Project – Alexandria",
                "fr": "Investissement de deux bâtiments au projet Bashayer El Khair – Alexandrie"
              },
              {
                "id": 2,
                "ar": "إنشاء مركز تجاري / ترفيهي – البحر الأحمر",
                "en": "Establishment of a Commercial / Entertainment Center – Red Sea",
                "fr": "Création d’un centre commercial / de loisirs – Mer Rouge"
              },
              {
                "id": 3,
                "ar": "إنشاء مجمع مصانع لمنتجات المياه ومجمع لإنتاج خامات ومستلزمات الإنتاج بخط إنتاج جديد – سيوة",
                "en": "Establishment of a Water Products Industrial Complex and Raw Materials Production Facility with a New Production Line – Siwa",
                "fr": "Création d’un complexe industriel pour les produits de l’eau et d’une unité de production de matières premières avec une nouvelle ligne de production – Siwa"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/safi/1.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/safi/2.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/safi/3.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/safi/4.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/safi/5.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/safi/6.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/safi/7.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/safi/8.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/safi/9.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/safi/10.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/safi/11.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/safi/12.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 13,
                "url": "/assets/images/comp_factories/safi/13.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 14,
                "url": "/assets/images/comp_factories/safi/14.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": 1998,
            "description_ar": "تأسست الشركة عام 2022 بهدف تنمية واحة سيوة واستغلال المياه الجوفية النقية في الخزان النوبي على عمق 1000 متر، كما تعمل كمنطقة لإنتاج الزيتون البكر الخالي من الكيماويات. تقوم الشركة بإنتاج وتعبئة المياه الطبيعية، الملح الصخري، وزيت الزيتون والمخللات بأنواعها.",
            "description_en": "The company was established in 2022 to develop the Siwa Oasis and utilize the pure groundwater in the Nubian aquifer at a depth of 1000 meters, as well as to serve as an area for producing chemical-free extra virgin olive oil. The company produces and bottles natural water, rock salt, olive oil, and various pickles.",
            "description_fr": "La société a été créée en 2022 pour développer l'oasis de Siwa et exploiter les eaux souterraines pures dans l'aquifère nubien à une profondeur de 1000 mètres, ainsi que pour servir de zone de production d'huile d'olive extra vierge sans produits chimiques. La société produit et embouteille de l'eau naturelle, du sel gemme, de l'huile d'olive et divers cornichons.",
            "contact": {
              "address": "الكيلو 4.5 طريق القاهرة - السويس بجوار كوبري الجيش - القاهرة",
              "phone": "(+20) 2 4140258",
              "fax": "(+20) 2 4140257",
              "hotline": "16923"
            },
            "products": [
              "مياه طبيعية",
              "ملح صخري",
              "زيت زيتون بكر",
              "مخللات بأنواعها"
            ],
            "headquarter": {
              "address": "كم 4،5 الماظة - طر السويس",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مصنع (إنتاج وتعبئة مياه - زيت زيتون ومخللات)",
                "location": "كم (5) طريق سيوة / مطروح واحة سيوة",
                "governorate": "مطروح"
              },
              {
                "unit_name": "مصنع غسيل وإنتاج الملح",
                "location": "قرية أبو بكر / سيوة",
                "governorate": "مطروح"
              }
            ],
            "locations": [
              {
                "location_ar": "برج العرب الجديدة",
                "location_en": "New Borg El Arab",
                "location_fr": "Nouveau Borg El Arab",
                "governorate_ar": "الإسكندرية",
                "governorate_en": "Alexandria",
                "governorate_fr": "Alexandrie",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "المصنع الرئيسي",
                    "factory_en": "Main Factory",
                    "factory_fr": "Usine principale",
                    "products": [
                      {
                        "product_ar": "منتجات إنتاجية متنوعة",
                        "product_en": "Various productive products",
                        "product_fr": "Divers produits productifs",
                        "product_image": "/assets/images/Products/productive_products.webp",
                        "capacity": 10000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 40,
          "ar": "الشركة الوطنية للبطاريات",
          "en": "National Batteries Company",
          "fr": "Société nationale des batteries",
          "logo": "/assets/images/companies_logo/batterie.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "تسويق منتجات الشركة من البطاريات بعدد (50) ألف بطارية/عام، طاقة الشركة حالياً (105) ألف بطارية/عام وستصل إلى (150) ألف بطارية/عام",
                "en": "Marketing the Company's Battery Products at 50,000 Batteries/Year; Current Company Capacity is 105,000 Batteries/Year, Expected to Reach 150,000 Batteries/Year",
                "fr": "Commercialisation des produits de batterie de l’entreprise à 50 000 batteries/an ; capacité actuelle de l’entreprise 105 000 batteries/an, prévue d’atteindre 150 000 batteries/an"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/batteries/1.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/batteries/2.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/batteries/3.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/batteries/4.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/batteries/5.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/batteries/6.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/batteries/7.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/batteries/8.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/batteries/9.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/batteries/10.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/batteries/11.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/batteries/12.webp",
                "title": "الشركة الوطنية للبطاريات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2015",
            "description_ar": "أنشئت الشركة عام 2015 بهدف إنتاج جميع بطاريات مركبات/معدات القوات المسلحة بأحدث طرق وتكنولوجيا التصنيع الكورية بسواعد مصرية لتحقيق الاكتفاء الذاتي والتوسع في مجال الأنشطة الصناعية المغذية للسيارات بما يساهم في خطة التنمية بالدولة. تنتج الشركة مختلف أنواع بطاريات المركبات مختلفة الأمبير (40 أمبير/س : 240 أمبير/س) كما تقوم بإعادة تدوير واستخدام مكونات البطاريات بهدف خفض تكاليف الإنتاج.",
            "description_en": "The company was established in 2015 to produce all batteries for Armed Forces vehicles/equipment with the latest Korean manufacturing methods and technology with Egyptian hands to achieve self-sufficiency and expand in the field of industrial activities feeding the automotive industry, which contributes to the state's development plan. The company produces various types of vehicle batteries with different amperage (40 amps/hour: 240 amps/hour) and also recycles and uses battery components to reduce production costs.",
            "description_fr": "La société a été créée en 2015 pour produire toutes les batteries pour véhicules/équipements des Forces armées avec les dernières méthodes et technologies de fabrication coréennes avec des mains égyptiennes pour réaliser l'autosuffisance et se développer dans le domaine des activités industrielles alimentant l'industrie automobile, ce qui contribue au plan de développement de l'État. La société produit divers types de batteries de véhicules avec différentes ampérages (40 ampères/heure : 240 ampères/heure) et recycle et utilise également les composants de la batterie pour réduire les coûts de production.",
            "products": [
              "بطاريات المركبات",
              "بطاريات المعدات",
              "إعادة تدوير البطاريات"
            ],
            "contact": {
              "address": "معسكر عزة شرف - التل الكبير - الإسماعيلية",
              "phone": "064/3963374 - 064/3963354",
              "fax": "",
              "email": "nsb@mod.gov.eg"
            },
            "headquarter": {
              "address": "معسكر عزت شرف - التل الكبير",
              "governorate": "الإسماعيلية"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "العاشر من رمضان",
                "location_en": "10th of Ramadan",
                "location_fr": "10 Ramadan",
                "governorate_ar": "الشرقية",
                "governorate_en": "Sharqia",
                "governorate_fr": "Charqia",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع البطاريات الرئيسي",
                    "factory_en": "Main Batteries Factory",
                    "factory_fr": "Usine principale de batteries",
                    "products": [
                      {
                        "product_ar": "بطاريات سيارات وجافة",
                        "product_en": "Car and dry batteries",
                        "product_fr": "Batteries de voiture et piles sèches",
                        "product_image": "/assets/images/Products/batteries.webp",
                        "capacity": 500000,
                        "unit_ar": "بطارية/عام",
                        "unit_en": "batteries/year",
                        "unit_fr": "batteries/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 41,
          "ar": "الشركة الوطنية للتبريدات والتوريدات",
          "en": "National Refrigeration and Supplies Company",
          "fr": "Société nationale de réfrigération et d'approvisionnements",
          "logo": "/assets/images/companies_logo/Cooling.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/refrigeration/1.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/refrigeration/2.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/refrigeration/3.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/refrigeration/4.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/refrigeration/5.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/refrigeration/6.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/refrigeration/7.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/refrigeration/8.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/refrigeration/9.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/refrigeration/10.webp",
                "title": "الشركة الوطنية للتبريدات",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2015",
            "description_ar": "شُيّدت الشركة عام 1996 بهدف تنمية واحة سيوة واستغلال المياه الجوفية النقية التي تتميز بها واحة سيوة في الخزان الجوفي النوبي على عمق 1000 متر وكمنطقة للزيتون البكر الخالي من الكيماويات. تعمل الشركة في مجال إنتاج وتعبئة المياه الطبيعية من المياه الجوفية العميقة بعد معالجتها بأحدث الوسائل التكنولوجية المستخدمة وفقاً للمستويات والمعايير العالمية كما تقوم بإنتاج الملح الصخري وزيت الزيتون والمخللات بأنواعها.",
            "description_en": "The company was established in 1996 with the aim of developing Siwa Oasis and utilizing its pure groundwater found in the Nubian aquifer at a depth of 1000 meters, as well as benefiting from its naturally grown, chemical-free olives. The company operates in producing and packaging natural water sourced from deep groundwater after treatment using the latest technological methods according to international standards. It also produces rock salt, olive oil, and various types of pickles.",
            "description_fr": "La société a été fondée en 1996 dans le but de développer l’oasis de Siwa et d’exploiter son eau souterraine pure provenant de l’aquifère nubien à une profondeur de 1000 mètres, ainsi que de tirer parti de ses olives naturelles exemptes de produits chimiques. L’entreprise produit et conditionne de l’eau naturelle issue de nappes profondes, après traitement selon les technologies et normes internationales. Elle produit également du sel gemme, de l’huile d’olive et divers types de cornichons.",
            "products": ["مياه طبيعية", "ملح صخري", "زيت زيتون", "مخللات"],
            "contact": {
              "address": "الكيلو 4.5 طريق القاهرة السويس – بجوار كوبري الجيش - القاهرة",
              "phone": "02-4140258 / 02-4140257",
              "fax": "",
              "email": "nsb@mod.gov.eg"
            },
            "headquarter": {
              "address": "محور سعد الدين الشاذلى بجوار منطقة التجنيد خلف مخازن جهاز الخدمات العامة / الهايكستب",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "قطاع النقل المبرد",
                "location": "محور سعد الدين الشاذلى بجوار منطقة التجنيد خلف مخازن جهاز الخدمات العامة / الهايكستب",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "قطاع الهايكستب",
                "location": "محور سعد الدين الشاذلى بجوار منطقة التجنيد خلف مخازن جهاز الخدمات العامة / الهايكستب",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "قطاع السويس",
                "location": "داخل ميناء الأدبية بجوار ميناء بدر الجاف",
                "governorate": "السويس"
              },
              {
                "unit_name": "قطاع العامرية الإسكندرية",
                "location": "بجوار مستودع (300) تعيينات - العامرية",
                "governorate": "الإسكندرية"
              }
            ],
            "locations": [
              {
                "location_ar": "السادس من أكتوبر",
                "location_en": "6th of October",
                "location_fr": "6 Octobre",
                "governorate_ar": "الجيزة",
                "governorate_en": "Giza",
                "governorate_fr": "Gizeh",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع أنظمة التبريد",
                    "factory_en": "Refrigeration Systems Factory",
                    "factory_fr": "Usine de systèmes de réfrigération",
                    "products": [
                      {
                        "product_ar": "أنظمة تبريد وتكييف",
                        "product_en": "Refrigeration and air conditioning systems",
                        "product_fr": "Systèmes de réfrigération et climatisation",
                        "product_image": "/assets/images/Products/refrigeration_systems.webp",
                        "capacity": 10000,
                        "unit_ar": "وحدة/عام",
                        "unit_en": "units/year",
                        "unit_fr": "unités/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 42,
          "ar": "الشركة المصرية الأفريقية للمشروعات التنموية (EADP)",
          "en": "Egyptian African Development Projects Company (EADP)",
          "fr": "Société égypto-africaine des projets de développement (EADP)",
          "logo": "/assets/images/companies_logo/AfricaInvestment.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/eadp/1.webp",
                "title": "الشركة المصرية الأفريقية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/eadp/2.webp",
                "title": "الشركة المصرية الأفريقية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/eadp/3.webp",
                "title": "الشركة المصرية الأفريقية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/eadp/4.webp",
                "title": "الشركة المصرية الأفريقية",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2018 بهدف تنمية العلاقات التجارية والاستثمارية مع الدول الإفريقية وخاصة دولة تنزانيا. تعمل الشركة على إنشاء مصنع لتصنيع الأعلاف بكافة أنواعها وتشغيل محطة لفرز وتدريج وتشميع وتعبئة وتغليف الحاصلات الزراعية، والتوسع في مجال الاستيراد والتصدير للمواد والسلع والحاصلات، بالإضافة إلى أعمال الوكالات التجارية داخل وخارج مصر، وكذلك التوسع في استصلاح الأراضي ومشروعات تسمين الماشية خارج جمهورية مصر العربية.",
            "description_en": "An Egyptian joint-stock company established in 2018 with the aim of enhancing trade and investment relations with African countries, especially Tanzania. The company is establishing a factory for producing all types of animal feed and operating a sorting, grading, waxing, packing, and packaging station for agricultural crops. It is also expanding in the field of importing and exporting goods and commodities, commercial agencies inside and outside Egypt, in addition to land reclamation projects and cattle fattening outside the Arab Republic of Egypt.",
            "description_fr": "Société égyptienne par actions fondée en 2018 dans le but de développer les relations commerciales et d'investissement avec les pays africains, en particulier la Tanzanie. L’entreprise travaille à la création d’une usine de production de tous types d’aliments pour animaux et à l’exploitation d’une station de tri, de classification, d’encaustiquage, d’emballage et de conditionnement des produits agricoles. Elle se développe également dans les domaines de l'importation, de l'exportation et des agences commerciales à l'intérieur et à l'extérieur de l'Égypte, ainsi que dans les projets de mise en valeur des terres et d'engraissement du bétail hors de la République arabe d'Égypte.",
            "products": ["الأعلاف", "الحاصلات الزراعية", "مواد استيراد وتصدير"],
            "contact": {
              "address": "30 ج مركز النرجس للخدمات - التجمع الخامس - القاهرة",
              "phone": "02/26190005 - 02/21600096",
              "fax": "02/5657391 - 02/5657392",
              "email": "shahira.tayel@eadp.com.eg"
            },
            "headquarter": {
              "address": " 30 ج مركز النرجس للخدمات - التجمع الخامس - ",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "القاهرة الجديدة",
                "location_en": "New Cairo",
                "location_fr": "Nouveau Caire",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "المقر الرئيسي للشركة",
                    "factory_en": "Company Main Headquarters",
                    "factory_fr": "Siège social principal de l'entreprise",
                    "products": [
                      {
                        "product_ar": "مشروعات تنموية في أفريقيا",
                        "product_en": "Development projects in Africa",
                        "product_fr": "Projets de développement en Afrique",
                        "product_image": "/assets/images/Projects/africa_projects.webp",
                        "capacity": 15,
                        "unit_ar": "مشروع/عام",
                        "unit_en": "projects/year",
                        "unit_fr": "projets/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 43,
          "ar": "مدينة دمياط للأثاث",
          "en": "Damietta Furniture City",
          "fr": "Cité du meuble de Damiette",
          "logo": "/assets/images/companies_logo/DamiettaFurnitureCity.webp",
          "link":"www.ewt-eg.com",

          "details": {
            "opportunity":[
              {
                "id": 45,
                "ar": "إنشاء واستثمار المول التجاري بمدينة دمياط للأثاث",
                "en": "Establishing and Investing in the Commercial Mall in Damietta for Furniture",
                "fr": "Création et investissement dans le centre commercial à Damiette pour le mobilier"
              }
            ] ,
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/furniture/1.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/furniture/2.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/furniture/3.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/furniture/4.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/furniture/5.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/furniture/6.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/furniture/7.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/furniture/8.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/furniture/9.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/furniture/10.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/furniture/11.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/furniture/12.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 13,
                "url": "/assets/images/comp_factories/furniture/13.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              },
              {
                "id": 14,
                "url": "/assets/images/comp_factories/furniture/14.webp",
                "title": "مدينة دمياط للأثاث",
                "description": "مصنع حديث مجهز بأحدث التقنيات"
              }
            ],
            "establishment_year": "2019",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2019 وضمت لجهاز مشروعات الخدمة الوطنية عام 2021 بهدف إضافة طاقة إنتاجية لتصنيع الأثاث والصناعات التكميلية. تعمل الشركة على تنمية وسائل تسويق وتجارة الأثاث داخلياً وخارجياً، رفع حجم التجارة الداخلية للأثاث، زيادة الصادرات المصرية من الأثاث الخشبي والصناعات الخشبية، تقليص حجم الواردات من الأثاث والصناعات الخشبية إلى السوق المحلي، وزيادة مساهمة قطاع الأثاث والصناعات الخشبية في إجمالي الناتج المحلي، وإضافة صناعات حديثة مثل الأثاث الذكي وإنتاج الأخشاب الصناعية المسطحة بمصر. تعمل الشركة في مجال إنشاء مدينة صناعية حرفية متكاملة للأثاث وتشغيل وإدارة مصانع ووحدات صناعية لتصنيع الأثاث بكافة أنواعه، وإعداد الدراسات الاقتصادية والهندسية والتكنولوجية للمشروعات، وإنشاء البنية التحتية الداخلية ومصادر البنية التحتية الخارجية للمنطقة الصناعية، بالإضافة إلى التسويق والترويج داخل المنطقة الصناعية لجذب رؤوس الأموال والمشروعات الصناعية.",
            "description_en": "An Egyptian joint-stock company established in 2019 and integrated into the National Service Projects Authority in 2021 to increase production capacity for furniture and complementary industries. The company develops marketing and trade methods for furniture domestically and internationally, increases domestic furniture trade volume, boosts Egyptian exports of wooden furniture and related industries, reduces imports of furniture and wood products to the local market, and enhances the contribution of the furniture and wood sector to the national GDP. It also adds modern industries such as smart furniture and production of flat industrial wood in Egypt. The company works on establishing a fully integrated craft industrial city for furniture, managing and operating factories and industrial units for all types of furniture, preparing economic, engineering, and technological studies for projects, building internal and external infrastructure, and marketing and promoting the industrial area to attract investments and industrial projects.",
            "description_fr": "Une société égyptienne par actions créée en 2019 et intégrée à l'Autorité des projets de service national en 2021 pour accroître la capacité de production de meubles et d'industries complémentaires. L’entreprise développe des méthodes de marketing et de commerce pour les meubles au niveau national et international, augmente le volume du commerce intérieur de meubles, booste les exportations égyptiennes de meubles en bois et industries associées, réduit les importations de meubles et produits en bois sur le marché local, et renforce la contribution du secteur du meuble et du bois au PIB national. Elle ajoute également des industries modernes telles que le mobilier intelligent et la production de bois industriel plat en Égypte. La société travaille à la création d'une ville industrielle artisanale intégrée pour le mobilier, à la gestion et l'exploitation d'usines et unités industrielles pour tous types de meubles, à la préparation d'études économiques, techniques et technologiques pour les projets, à la construction des infrastructures internes et externes, et au marketing et à la promotion de la zone industrielle pour attirer les investissements et projets industriels.",
            "products": ["أثاث خشبي", "أثاث ذكي", "أخشاب صناعية مسطحة"],
            "contact": {
              "address": "مركز خدمي 3 - مدينة دمياط للأثاث - شطا - دمياط",
              "phone": "057360588",
              "email": "com.damiettafc@in"
            },
            "headquarter": {
              "address": "مدينة دمياط",
              "governorate": "دمياط"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "دمياط الجديدة",
                "location_en": "New Damietta",
                "location_fr": "Nouvelle Damiette",
                "governorate_ar": "دمياط",
                "governorate_en": "Damietta",
                "governorate_fr": "Damiette",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "المدينة الصناعية للأثاث",
                    "factory_en": "Furniture Industrial City",
                    "factory_fr": "Cité industrielle du meuble",
                    "products": [
                      {
                        "product_ar": "أثاث منزلي ومكتبي",
                        "product_en": "Home and office furniture",
                        "product_fr": "Meubles domestiques et de bureau",
                        "product_image": "/assets/images/Products/furniture.webp",
                        "capacity": 100000,
                        "unit_ar": "قطعة/عام",
                        "unit_en": "pieces/year",
                        "unit_fr": "pièces/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 45,
          "ar": "الشركة الوطنية للمشروعات الإنتاجية والتوريدات العمومية \"صافى\" (بورصة)",
          "en": "National Productive Projects and Public Supplies Company \"Safi\" (Stock Exchange)",
          "fr": "Société nationale des projets productifs et des approvisionnements publics \"Safi\" (Bourse)",
          "logo": "/assets/images/companies_logo/AdministrativeCapital1.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/safi/1.webp",
                "title": "الشركة الوطنية للمشروعات الإنتاجية والتوريدات العمومية",
                "description": "المقر الرئيسي للشركة"
              }
            ],
            "establishment_year": 2018,
            "description_ar": "تختص الشركة في إدارة وتنفيذ المشروعات الإنتاجية المختلفة وتقديم التوريدات العمومية للجهات الحكومية والقطاع الخاص، مع وجود نشاط في البورصة.",
            "description_en": "The company specializes in managing and implementing various productive projects and providing public supplies to government entities and the private sector, with stock exchange activity.",
            "description_fr": "La société est spécialisée dans la gestion et la mise en œuvre de divers projets productifs et la fourniture d'approvisionnements publics aux entités gouvernementales et au secteur privé, avec une activité boursière.",
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ],

            "headquarter": {
              "address": "كم 4،5 الماظة - طر السويس",
              "governorate": "القاهرة"
            },
            "units": []
          },
          "number_of_factories": 5
        },
        {
          "id": 46,
          "ar": "شركة الشرق والغرب للتجارة الدولية",
          "en": "East and West International Trade Company",
          "fr": "Société de commerce international Est et Ouest",
          "logo": "/assets/images/companies_logo/EastandWest.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/east_west/1.webp",
                "title": "شركة الشرق والغرب للتجارة الدولية",
                "description": "المقر الرئيسي للشركة"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/east_west/2.webp",
                "title": "شركة الشرق والغرب - قسم الاستيراد",
                "description": "قسم إدارة عمليات الاستيراد والتوريد"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/east_west/3.webp",
                "title": "شركة الشرق والغرب - قسم التصدير",
                "description": "قسم إدارة عمليات التصدير والتوزيع الدولي"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/east_west/4.webp",
                "title": "شركة الشرق والغرب - المستودعات",
                "description": "المستودعات المجهزة لتخزين البضائع والمنتجات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/east_west/5.webp",
                "title": "شركة الشرق والغرب - الشحن والتخليص",
                "description": "قسم الشحن الجوي والبحري والتخليص الجمركي"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/east_west/6.webp",
                "title": "شركة الشرق والغرب - فريق العمل",
                "description": "الفريق المتخصص في إدارة العمليات التجارية"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/east_west/7.webp",
                "title": "شركة الشرق والغرب - التوكيلات التجارية",
                "description": "قسم إدارة التوكيلات والشراكات الدولية"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/east_west/8.webp",
                "title": "شركة الشرق والغرب - مراقبة الجودة",
                "description": "مختبر مراقبة جودة المنتجات المستوردة والمصدرة"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/east_west/9.webp",
                "title": "شركة الشرق والغرب - التغليف والتعبئة",
                "description": "مرحلة التغليف النهائي للمنتجات المعدة للتصدير"
              }
            ],
            "establishment_year": "2019",
            "description_ar": "ركة مساهمة مصرية أنشئت بهدف العمل في الاستيراد والتصدير. تعمل الشركة في مجال الاستيراد والتصدير والتوكيلات التجارية الداخلية والخارجية والدولية.",
            "description_en": "An Egyptian joint-stock company established to work in import, export, and local, international, and global commercial agencies.",
            "description_fr": "Une société égyptienne par actions créée pour travailler dans l'importation, l'exportation et les agences commerciales locales, internationales et mondiales.",
            "products": [
              " توريد مركبات وشاسيهات ومحركات وقطع غيار لصالح القوات المسلحة",
              "توريد معدات خاصة",
              " توريد خامات لكافة أنواع المظلات وعبوات الامداد لصالح ادارة المهمات",
              "توريد قوافل طبية مجهزة عيادات مختلفة لصالح وزارة الصحة والسكان",
              "توريد معدات ثقيلة لصالح القوات المسلحة",
              " توريد مركبات وشاسيهات ومحركات وقطع غيار لصالح القوات المسلحة"
            ],
            "contact": {
              "address": "شارع طلعت حرب - قصر النيل - القاهرة",
              "phone": "",
              "email": ""
            },
            "headquarter": {
              "address": "26 ش شريف- عمارة الإيموبليا وسط البلد",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 47,
          "ar": "الشركة المصرية السودانية للتنمية والإستثمارات المتعددة",
          "en": "Egyptian Sudanese Development and Multiple Investments Company",
          "fr": "Société égypto-soudanaise de développement et d'investissements multiples",
          "logo": "/assets/images/companies_logo/eastwest.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/egypt_sudan/1.webp",
                "title": "الشركة المصرية السودانية للتنمية",
                "description": "المقر الرئيسي للشركة"
              }
            ],
            "establishment_year": "2021",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2021 بهدف تحقيق التعاون الاقتصادي وزيادة التبادل التجاري بين مصر والسودان وتنمية استثمارات الأمن الغذائي في البلدين. تعمل الشركة على تسويق منتجات المساهمين الرئيسيين مثل اللحوم (البقري - الضأن - الإبل)، المحاصيل الزيتية (السمسم - زهرة الشمس - القطن - الفول السوداني - الذرة)، والمنتجات الغذائية (الأرز - الدقيق - السكر)، بالإضافة إلى السلع الاستراتيجية مثل الأسمنت والحديد.",
            "description_en": "An Egyptian joint-stock company established in 2021 with the aim of achieving economic cooperation and increasing trade exchange between Egypt and Sudan while developing food security investments in both countries. The company markets the main shareholders’ products such as meats (beef, mutton, camels), oil crops (sesame, sunflower, cotton, peanuts, corn), food products (rice, flour, sugar), and strategic commodities such as cement and steel.",
            "description_fr": "Société égyptienne par actions fondée en 2021 dans le but de renforcer la coopération économique et d'accroître les échanges commerciaux entre l'Égypte et le Soudan, tout en développant les investissements liés à la sécurité alimentaire dans les deux pays. L’entreprise commercialise les produits de ses principaux actionnaires tels que les viandes (bœuf, mouton, chameaux), les cultures oléagineuses (sésame, tournesol, coton, arachides, maïs), les produits alimentaires (riz, farine, sucre) ainsi que les produits stratégiques comme le ciment et l’acier.",
            "products": [
              "لحوم (بقري - ضأن - إبل)",
              "محاصيل زيتية (سمسم - زهرة الشمس - قطن - فول سوداني - ذرة)",
              "منتجات غذائية (أرز - دقيق - سكر)",
              "سلع استراتيجية (أسمنت - حديد)"
            ],
            "contact": {
              "address": "18 أ شارع سيزوستريس - الكوربة - مصر الجديدة - القاهرة",
              "phone": "02/6905864 - 02/6905865 - 02/6905867",
              "email": "info@egysudan.com - mhassen@egysudan.com"
            },
            "headquarter": {
              "address": "18 أ ش سيزوستريس - الكوربة - مصر الجديدة ",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 48,
          "ar": "شركة فودنيشن إنترناشيونال لإدارة المطاعم",
          "en": "Foundation International for Restaurant Management",
          "fr": "Foundation International pour la gestion de restaurants",
          "logo": "/assets/images/companies_logo/fode.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/foundation/1.webp",
                "title": "شركة فودنيشن إنترناشيونال",
                "description": "أحد المطاعم التابعة للشركة"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/foundation/2.webp",
                "title": "شركة فودنيشن إنترناشيونال",
                "description": "خدمات إدارة المطاعم"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/foundation/3.webp",
                "title": "شركة فودنيشن إنترناشيونال",
                "description": "خدمات الطعام والضيافة"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/foundation/4.webp",
                "title": "شركة فودنيشن إنترناشيونال",
                "description": "إدارة الخدمات الغذائية"
              }
            ],
            "establishment_year": "2021",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2021 بهدف تقديم مساحات مطابخ مجهزة لتقديم طعام عالي الجودة وخفض النفقات العامة وزيادة الإنتاج، ودعم رواد الأعمال في مجال المطابخ السحابية.",
            "description_en": "An Egyptian joint-stock company established in 2021 to provide fully equipped kitchen spaces for high-quality food production, reduce operational costs, and support entrepreneurs entering the cloud-kitchen sector.",
            "description_fr": "Une société égyptienne par actions créée en 2021 pour fournir des espaces de cuisine entièrement équipés pour une production alimentaire de haute qualité, réduire les coûts d'exploitation et soutenir les entrepreneurs entrant dans le secteur des cuisines virtuelles.",
            "products": [
              "عطاء تدريبات",
              "خدمات التسويقية",
              "تصوير المنتجات ",
              "التسويق الكتروني لهم"
            ],
            "contact": {
              "address": "تيفولي بلازا - شارع عمر بن الخطاب - القاهرة",
              "phone": "01281442445",
              "email": ""
            },
            "headquarter": {
              "address": "وحدة (4) الدور الأول - مول جولدن بلازا -  بجوار دار الاشارة مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        }
      ]
    },
    {
      "sector_ar": "قطاع مشروعات البترول والغاز والتعدين",
      "sector_en": "Oil, Gas and Mining Projects Sector",
      "sector_fr": "Secteur des projets pétroliers, gaziers et miniers",
      "gradient": "from-blue-500/90 to-cyan-600/90",
      "companies": [
        {
          "id": 49,
          "ar": "الشركة المصرية للتعدين وإدارة وإستغلال المحاجر والملاحات",
          "en": "Egyptian Mining, Quarry and Salt Flats Management and Exploitation Company",
          "fr": "Société égyptienne d'exploitation minière, de gestion et d'exploitation des carrières et salines",
          "logo": "/assets/images/companies_logo/Mining1.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/mining/1.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "عمليات التعدين والمحاجر"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/mining/2.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/mining/3.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/mining/4.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/mining/5.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/mining/6.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/mining/7.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/mining/8.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/mining/9.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/mining/10.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/mining/11.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/mining/12.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 13,
                "url": "/assets/images/comp_factories/mining/13.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 14,
                "url": "/assets/images/comp_factories/mining/14.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              },
              {
                "id": 15,
                "url": "/assets/images/comp_factories/mining/15.webp",
                "title": "الشركة المصرية للتعدين",
                "description": "إدارة المحاجر والملاحات"
              }
            ],
            "establishment_year": "1991",
            "description_ar": "أنشئت الشركة عام 1992 بهدف تلبية احتياجات السوق المحلي من الخامات التعدينية والمحجرية لصالح المشروعات القومية وتعظيم القيمة المضافة للثروة التعدينية بكافة أراضي الجمهورية وتفعيل التعاون مع الجهات العلمية والبحثية لتبادل الخبرات في مجال التعدين. تعمل الشركة في مجال استخراج الخامات والمعادن وبعض مواد ومستلزمات البناء والتشييد (الالباستر – الرمل الزجاجي – الرخام – الجبس – البنتونيت – الحجر الجيري – الطفلة – الرمل – الزلط – خام الفوسفات – بازلت – الملح – دولوميت – ملح صخري – بريشيا).",
            "description_en": "Established in 1992 to meet the local market's needs for mining and quarry raw materials for national projects, maximize the added value of mining wealth across all republic lands, and activate cooperation with scientific and research bodies to exchange expertise in the mining field. The company works in extracting ores, minerals, and some construction materials and supplies (alabaster - glass sand - marble - gypsum - bentonite - limestone - clay - sand - gravel - phosphate ore - basalt - salt - dolomite - rock salt - breccia).",
            "description_fr": "Créée en 1992 pour répondre aux besoins du marché local en matières premières minières et de carrière pour les projets nationaux, maximiser la valeur ajoutée de la richesse minière sur toutes les terres de la république et activer la coopération avec les organismes scientifiques et de recherche pour échanger des expertises dans le domaine minier. L'entreprise travaille dans l'extraction de minerais, de minéraux et de certains matériaux et fournitures de construction (albâtre - sable de verre - marbre - gypse - bentonite - calcaire - argile - sable - gravier - minerai de phosphate - basalte - sel - dolomite - sel gemme - brèche).",
            "products": [
              "الالباستر",
              "الرمل الزجاجي",
              "الرخام",
              "الجبس",
              "البنتونيت",
              "الحجر الجيري",
              "الطفلة",
              "الرمل",
              "الزلط",
              "خام الفوسفات",
              "البازلت",
              "الملح",
              "الدولوميت",
              "الملح الصخري",
              "البرشيا"
            ],
            "contact": {
              "address": "مساكن شيراتون – مصر الجديدة – القاهرة",
              "phone": "4173860 / 02 ",
              "fax": "4173860 / 02 ",
              "email": ""
            },
            "headquarter": {
              "address": "قطعة 2 مربع 1258 - شيراتون- مصر الجديدة",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "الوحدة الإنتاجية رقم (1)",
                "location": "كم 40 طرشرم الشيخ- دهب",
                "governorate": "ج سيناء"
              },
              {
                "unit_name": "الوحدة الإنتاجية رقم (2)",
                "location": "مدينة إسنا",
                "governorate": "أسوان"
              },
              {
                "unit_name": "الوحدة الإنتاجية رقم (3)",
                "location": "وادى أبو غلقة - مرسى علم",
                "governorate": "البحر الأحمر"
              },
              {
                "unit_name": "مجمع إنتاج الكوارتز بالعين السخنة",
                "location": "وادى أم تلة – جبل الكحيلية",
                "governorate": "السويس"
              }
            ],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },

        {
          "id": 51,
          "ar": "شركة مدينة كنوز للرخام والجرانيت",
          "en": "Kunuz City for Marble and Granite Company",
          "fr": "Société Cité Kunouz pour le marbre et le granit",
          "logo": "/assets/images/companies_logo/Konooz.webp",
          "link":"https://konozmisr.com",

          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "مصنع لمعالجة الرمال الكاولنيه وفصل الرمل الزجاجي والكاولين",
                "en": "Factory for Processing Kaolin Sand and Separating Glass Sand and Kaolin",
                "fr": "Usine de traitement du sable kaolinique et séparation du sable de verre et kaolin"
              },
              {
                "id": 2,
                "ar": "مصنع إنتاج الورق الصخري (يصنع من 80% كربونات كالسيوم + بولي إيثيلين، ولا يتأثر بالماء ولا يتغير لونه)",
                "en": "Stone Paper Production Factory (Made from 80% Calcium Carbonate + Polyethylene, Water-Resistant and Color-Stable)",
                "fr": "Usine de production de papier minéral (fabriqué à partir de 80 % de carbonate de calcium + polyéthylène, résistant à l’eau et couleur stable)"
              },
              {
                "id": 3,
                "ar": "مصنع زجاج البصريات لإنتاج زجاج النظارات الطبية والأجهزة العلمية",
                "en": "Optical Glass Factory for Producing Eyeglass and Scientific Equipment Glass",
                "fr": "Usine de verre optique pour la production de verres pour lunettes et équipements scientifiques"
              },
              {
                "id": 4,
                "ar": "مصنع لإنتاج بودرة الكالسيوم العادية والمعالجة لإنتاج كربونات كالسيوم مطحونة ومعالجة تدخل في صناعات الدهانات والبلاستيك ومواسير البلاستيك",
                "en": "Factory for Producing Regular and Processed Calcium Powder for Ground Calcium Carbonate Used in Paint, Plastic, and Plastic Pipe Industries",
                "fr": "Usine de production de poudre de calcium ordinaire et traitée pour carbonate de calcium moulu utilisé dans les industries de peinture, plastique et tuyaux en plastique"
              },
              {
                "id": 5,
                "ar": "مصنع البولي إستر والإيبوكسي لإنتاج الإيبوكسي والبولي إستر لمعالجة أسطح الرخام والجرانيت",
                "en": "Polyester and Epoxy Factory for Producing Epoxy and Polyester for Marble and Granite Surface Treatment",
                "fr": "Usine de polyester et époxy pour la production d’époxy et polyester pour le traitement des surfaces de marbre et granit"
              },
              {
                "id": 6,
                "ar": "مصنع المونة المتمددة والخاصة بالمحاجر (الفراكت) لإنتاج مونة متمددة تحقن في خط الثقوب المتتالية لفصل كتل الرخام والجرانيت في المحاجر",
                "en": "Extended Mortar Factory for Quarries (Fract) Producing Extended Mortar Injected into Successive Drill Lines to Separate Marble and Granite Blocks",
                "fr": "Usine de mortier étendu pour carrières (Fract) produisant un mortier étendu injecté dans des lignes de forage successives pour séparer les blocs de marbre et de granit"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/marble/1.webp",
                "title": "مدينة كنوز للرخام والجرانيت",
                "description": "مصنع الرخام والجرانيت"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/marble/2.webp",
                "title": "مدينة كنوز للرخام والجرانيت",
                "description": "منتجات الرخام والجرانيت"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/marble/3.webp",
                "title": "مدينة كنوز للرخام والجرانيت",
                "description": "منتجات الرخام والجرانيت"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/marble/4.webp",
                "title": "مدينة كنوز للرخام والجرانيت",
                "description": "منتجات الرخام والجرانيت"
              }
            ],
            "establishment_year": 2023,
            "description_ar": "تختص الشركة في استخراج وتصنيع الرخام والجرانيت المصري، وتصديره للأسواق المحلية والعالمية.",
            "description_en": "The company specializes in extracting and manufacturing Egyptian marble and granite, and exporting it to local and international markets.",
            "description_fr": "La société est spécialisée dans l'extraction et la fabrication de marbre et de granit égyptiens, et leur exportation vers les marchés locaux et internationaux.",
            "locations": [
              {
                "location_ar": "المدينة الصناعية",
                "location_en": "Industrial City",
                "location_fr": "Cité industrielle",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع الرخام والجرانيت",
                    "factory_en": "Marble and Granite Factory",
                    "factory_fr": "Usine de marbre et de granit",
                    "products": [
                      {
                        "product_ar": "ألواح رخام وجرانيت",
                        "product_en": "Marble and granite slabs",
                        "product_fr": "Dalles de marbre et de granit",
                        "product_image": "/assets/images/Products/marble.webp",
                        "capacity": 50000,
                        "unit_ar": "متر مربع/عام",
                        "unit_en": "square meters/year",
                        "unit_fr": "mètres carrés/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "تقاطع طريق الجلالة – العين السخنة",
              "governorate": "السويس"
            },
            "units": [
              {
                "unit_name": "الوحدات التابعة",
                "location": "معرض شق الثعبان – العاصمة الادارية",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "مصنع الرخام والجرانيت بالعين السخنة",
                "location": "وادى ام أتلة العين السخنة",
                "governorate": "السويس"
              },
              {
                "unit_name": "مصنع الرخام والجرانيت برأس سدر",
                "location": "وادى سدر - أبو خشير - رأس سدر",
                "governorate": "ج سيناء"
              },
              {
                "unit_name": "مصنع الرخام والجرانيت بالمنيا",
                "location": "طر الشيخ فضل - راس غارب - المنيا",
                "governorate": "المنيا"
              },
              {
                "unit_name": "مصنع الجرانيت بأسوان",
                "location": "طر الشلال - جبل طابية الشيخ - أسوان",
                "governorate": "أسوان"
              },
              {
                "unit_name": "مصنع الرخام والجرانيت بمدينة بدر",
                "location": "المنطقة الصناعية بمدينة بدر",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "مجمع مصانع الرخام والجرانيت ببنى سويف",
                "location": "المنطقة الصناعية (31/2) بياض العرب",
                "governorate": "بنى سويف"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 52,
          "ar": "الشركة المصرية للرمال السوداء",
          "en": "Egyptian Black Sand Company",
          "fr": "Société égyptienne des sables noirs",
          "logo": "/assets/images/companies_logo/Black-Sand.webp",

          "details": {
            "opportunity":[
              {
                "id": 36,
                "ar": "الإستثمار في إنشاء مشروع القيمة المضافة لمعدن الألمانيت لإنتاج ثاني أكسيد التيتانيوم والتيتانيوم الإسفنجي وفلز التيتانيوم وسبائكه والحديد الغفل، جاري إعداد دراسة الجدوى للمشروع بواسطة شركة (TZMI) الأسترالية، ومخطط الانتهاء منها في شهر يوليو 2024",
                "en": "Investment in Establishing a Value-Added Project for Ilmenite to Produce Titanium Dioxide, Sponge Titanium, Titanium Metal and Its Alloys, and Pig Iron; Feasibility Study is Being Prepared by the Australian Company (TZMI), with Completion Planned for July 2024",
                "fr": "Investissement dans la création d’un projet à valeur ajoutée pour l’ilménite afin de produire du dioxyde de titane, du titane en éponge, du métal de titane et ses alliages, et de la fonte brute ; l’étude de faisabilité est en cours par la société australienne (TZMI) avec une finalisation prévue en juillet 2024"
              },
              {
                "id": 37,
                "ar": "إنشاء مشروعات تعدين جديدة للرمال السوداء تعتمد على تركيز وفصل المعادن الاقتصادية الثقيلة المستخرجة من الرمال السوداء (الألمانيت - الماجنتيت - الروتايل - الزيركون - الجارنت - المونازيت) بكل من (رشيد - بحيرة المنزلة - شرق العريش) بإجمالي عدد (3) مشاريع تعدين تحتوي على احتياطيات ضخمة ومؤكدة وبنسب تركيز مرتفعة",
                "en": "Establishing New Mining Projects for Heavy Mineral Sands Based on Concentration and Separation of Economic Heavy Minerals Extracted from Black Sands (Ilmenite - Magnetite - Rutile - Zircon - Garnet - Monazite) in (Rashid - Lake Manzala - East Arish), with a Total of 3 Mining Projects Containing Massive Confirmed Reserves with High Concentration Rates",
                "fr": "Création de nouveaux projets miniers de sables minéraux lourds basés sur la concentration et la séparation des minéraux économiques lourds extraits des sables noirs (ilménite - magnétite - rutile - zircon - grenat - monazite) à (Rachid - Lac Manzala - Est d’Arich), avec un total de 3 projets miniers contenant d’énormes réserves confirmées avec des taux de concentration élevés"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/black_sand/1.webp",
                "title": "الشركة المصرية للرمال السوداء",
                "description": "استخراج الرمال السوداء"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/black_sand/2.webp",
                "title": "الشركة المصرية للرمال السوداء",
                "description": "استخراج الرمال السوداء"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/black_sand/3.webp",
                "title": "الشركة المصرية للرمال السوداء",
                "description": "استخراج الرمال السوداء"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/black_sand/4.webp",
                "title": "الشركة المصرية للرمال السوداء",
                "description": "استخراج الرمال السوداء"
              }
            ],
            "establishment_year": "2016",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2016 بهدف استخراج وفصل واستغلال المعادن عن الرمال السوداء الشاطئية ورواسب الوديان وكذلك التعاون مع الشركات الفنية والخبرات الدولية لتحقيق قيمة مضافة للخامات المنتجة. تنتج الشركة خام (الألمنيت – الزيركون – الجارنت – الروتايل – الماجنتيت – المونازيت).",
            "description_en": "An Egyptian joint stock company established in 2016 to extract, separate and exploit minerals from beach black sands and valley deposits, as well as cooperate with technical companies and international expertise to achieve added value for the produced ores. The company produces ore (ilmenite - zircon - garnet - rutile - magnetite - monazite).",
            "description_fr": "Une société égyptienne par actions créée en 2016 pour extraire, séparer et exploiter les minéraux des sables noirs de plage et des dépôts de vallée, ainsi que coopérer avec des entreprises techniques et des expertises internationales pour réaliser une valeur ajoutée pour les minerais produits. L'entreprise produit du minerai (ilménite - zircon - grenat - rutile - magnétite - monazite).",
            "products": [
              "خام الألمنيت",
              "خام الزيركون",
              "خام الجارنت",
              "خام الروتايل",
              "خام الماجنتيت",
              "خام المونازيت"
            ],
            "contact": {
              "address": "بلطيم - الطريق الساحلي الدولي - كفر الشيخ.",
              "phone": "02/24173860",
              "fax": "02/24173861",
              "email": ""
            },
            "locations": [
              {
                "location_ar": "السواحل الشمالية",
                "location_en": "Northern Coasts",
                "location_fr": "Côtes nord",
                "governorate_ar": "كفر الشيخ",
                "governorate_en": "Kafr El Sheikh",
                "governorate_fr": "Kafr El Sheikh",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مصنع فصل المعادن",
                    "factory_en": "Mineral Separation Factory",
                    "factory_fr": "Usine de séparation des minéraux",
                    "products": [
                      {
                        "product_ar": "معادن الرمال السوداء",
                        "product_en": "Black sand minerals",
                        "product_fr": "Minerais de sable noir",
                        "product_image": "/assets/images/Products/black_sand.webp",
                        "capacity": 100000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "قرية الشهابية - البرلس",
              "governorate": "كفر الشيخ"
            },
            "units": [
              {
                "unit_name": "مصنع فصل المعادن الإقتصادية بالبرلس",
                "location": "محافظة كفر الشيخ",
                "governorate": "كفر الشيخ"
              },
              {
                "unit_name": "أرض التنجيم بالبرلس",
                "location": "محافظة كفر الشيخ",
                "governorate": "كفر الشيخ"
              },
              {
                "unit_name": "مصنع فصل المعادن الإقتصادية برشيد",
                "location": "مدينة رشيد",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "منطقةإستخلاص ركاز المعادن برشيد",
                "location": "مدينة رشيد",
                "governorate": "البحيرة"
              },
              {
                "unit_name": "منطقةإستخلاص ركاز المعادن بدمياط",
                "location": "مدينة دمياط",
                "governorate": "دمياط"
              },
              {
                "unit_name": "منطقةإستخلاص ركاز المعادن بالمنزلة",
                "location": "مدينة المنزلة",
                "governorate": "بورسعيد"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 53,
          "ar": "الشركة الوطنية المصرية للرخام والجرانيت",
          "en": "National Egyptian Marble and Granite Company",
          "fr": "Société nationale égyptienne du marbre et du granit",
          "logo": "/assets/images/companies_logo/rokham.webp",
          "details": {
            "opportunity":[
              {
                "id": 1,
                "ar": "تأسيس شركة متخصصة في استخراج بلوكات الرخام والجرانيت",
                "en": "Establishing a Company Specialized in Extracting Marble and Granite Blocks",
                "fr": "Création d’une société spécialisée dans l’extraction de blocs de marbre et de granit"
              },
              {
                "id": 2,
                "ar": "إنشاء مصنع لتدوير مخلفات الرخام والجرانيت بالجفجافة لإنتاج البردورات، الإنترلوك، والطوب الخفيف",
                "en": "Establishing a Factory to Recycle Marble and Granite Waste in Al-Gafgafa to Produce Curbstones, Interlocking Pavers, and Lightweight Bricks",
                "fr": "Création d’une usine pour recycler les déchets de marbre et de granit à Al-Gafgafa pour produire des bordures, pavés autobloquants et briques légères"
              },
              {
                "id": 3,
                "ar": "استكمال المرحلة الثانية من إنشاء المجمع الصناعي بالجفجافة بإستكمال تدبير خطوط إنتاج الجرانيت",
                "en": "Completing the Second Phase of Establishing the Industrial Complex in Al-Gafgafa by Finalizing Granite Production Lines",
                "fr": "Achever la deuxième phase de création du complexe industriel à Al-Gafgafa en finalisant les lignes de production de granit"
              },
              {
                "id": 4,
                "ar": "تسويق فائض المنتج من الرخام والجرانيت",
                "en": "Marketing the Surplus Marble and Granite Products",
                "fr": "Commercialisation des produits excédentaires de marbre et de granit"
              }
            ],
            
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/marble_national/1.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/marble_national/2.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/marble_national/3.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/marble_national/4.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/marble_national/5.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/marble_national/6.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/marble_national/7.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/marble_national/8.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/marble_national/9.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/marble_national/10.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/marble_national/11.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/marble_national/12.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 13,
                "url": "/assets/images/comp_factories/marble_national/13.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              },
              {
                "id": 14,
                "url": "/assets/images/comp_factories/marble_national/14.webp",
                "title": "الشركة الوطنية للرخام والجرانيت",
                "description": "مصنع الرخام الوطني"
              }
            ],
            "establishment_year": "2016",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2016 بهدف تحقيق الاستغلال الأمثل لثروات مصر الطبيعية من مواد التشييد والبناء ومنها الرخام والجرانيت وكذلك تحقيق الاكتفاء الذاتي لاحتياجات القوات المسلحة من هذه الخامات الاستراتيجية الهامة مع طرح فائض الإنتاج بالسوق المحلي لمنع الاحتكار في تلك السوق والحفاظ على ثبات واستقرار الأسعار بشكل مناسب في الأسواق. تعمل الشركة في مجال استخراج وتقطيع وتصنيع الرخام والجرانيت وتساهم في تعمير وتنمية شبه جزيرة سيناء من خلال إقامة مجمع صناعي للرخام والجرانيت بالعريش.",
            "description_en": "An Egyptian joint stock company established in 2019 to achieve optimal exploitation of Egypt's natural wealth of construction and building materials, including marble and granite, as well as achieve self-sufficiency for the Armed Forces' needs of these important strategic raw materials, while offering production surplus in the local market to prevent monopoly in that market and maintain appropriate price stability in the markets. The company works in extracting, cutting and manufacturing marble and granite and contributes to the reconstruction and development of the Sinai Peninsula by establishing an industrial complex for marble and granite in Al-Arish.",
            "description_fr": "Une société égyptienne par actions créée en 2019 pour réaliser une exploitation optimale des richesses naturelles de l'Égypte en matériaux de construction et de bâtiment, y compris le marbre et le granit, ainsi que pour réaliser l'autosuffisance des besoins des Forces armées en ces matières premières stratégiques importantes, tout en offrant le surplus de production sur le marché local pour empêcher le monopole sur ce marché et maintenir une stabilité des prix appropriée sur les marchés. L'entreprise travaille dans l'extraction, la coupe et la fabrication de marbre et de granit et contribue à la reconstruction et au développement de la péninsule du Sinaï en établissant un complexe industriel pour le marbre et le granit à Al-Arish.",
            "products": ["الرخام", "الجرانيت", "مستلزمات الرخام والجرانيت"],
            "contact": {
              "address": "برج رقم (1) شارع الميثاق - الحي العاشر - مدينة نصر - القاهرة",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "برج (1) عمارات صفوة الميثاق - مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "المجمع الصناعى للرخام",
                "location": "بئر الجفجافة",
                "governorate": "شمال سيناء"
              }
            ],
            "locations": [
              {
                "location_ar": "المنطقة الصناعية",
                "location_en": "Industrial Zone",
                "location_fr": "Zone industrielle",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع الرخام والجرانيت",
                    "factory_en": "Marble and Granite Factory",
                    "factory_fr": "Usine de marbre et de granit",
                    "products": [
                      {
                        "product_ar": "ألواح رخام وجرانيت",
                        "product_en": "Marble and granite slabs",
                        "product_fr": "Dalles de marbre et de granit",
                        "product_image": "/assets/images/Products/marble.webp",
                        "capacity": 75000,
                        "unit_ar": "متر مربع/عام",
                        "unit_en": "square meters/year",
                        "unit_fr": "mètres carrés/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 54,
          "ar": "الشركة المصرية الصينية للرمال السوداء",
          "en": "Egyptian Chinese Black Sand Company",
          "fr": "Société égypto-chinoise des sables noirs",
          "logo": "/assets/images/companies_logo/chiniseDust.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/black_sand_chinese/1.webp",
                "title": "الشركة المصرية الصينية للرمال السوداء",
                "description": "مشروع الرمال السوداء المشترك"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/black_sand_chinese/2.webp",
                "title": "الشركة المصرية الصينية للرمال السوداء",
                "description": "مشروع الرمال السوداء المشترك"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/black_sand_chinese/3.webp",
                "title": "الشركة المصرية الصينية للرمال السوداء",
                "description": "مشروع الرمال السوداء المشترك"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/black_sand_chinese/4.webp",
                "title": "الشركة المصرية الصينية للرمال السوداء",
                "description": "مشروع الرمال السوداء المشترك"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2018 بهدف استخراج وفصل واستغلال المعادن عن الرمال السوداء الشاطئية ورواسب الوديان وكذلك التعاون مع الشركات الفنية والخبرات الدولية لتحقيق قيمة مضافة للخامات المنتجة. تنتج الشركة خام (الألمنيت – الزيركون – الجارنت – الروتايل – الماجنتيت – المونازيت).",
            "description_en": "An Egyptian joint stock company established in 2018 to extract, separate and exploit minerals from beach black sands and valley deposits, as well as cooperate with technical companies and international expertise to achieve added value for the produced ores. The company produces ore (ilmenite - zircon - garnet - rutile - magnetite - monazite).",
            "description_fr": "Une société égyptienne par actions créée en 2018 pour extraire, séparer et exploiter les minéraux des sables noirs de plage et des dépôts de vallée, ainsi que coopérer avec des entreprises techniques et des expertises internationales pour réaliser une valeur ajoutée pour les minerais produits. L'entreprise produit du minerai (ilménite - zircon - grenat - rutile - magnétite - monazite).",
            "products": [
              "خام الألمنيت",
              "خام الزيركون",
              "خام الجارنت",
              "خام الروتايل",
              "خام الماجنتيت",
              "خام المونازيت"
            ],
            "contact": {
              "address": "بلطيم - الطريق الساحلي الدولي - كفر الشيخ",
              "phone": "",
              "fax": "",
              "email": ""
            },

            "headquarter": {
              "address": "بلطيم - الطريق الساحلي الدولي ",
              "governorate": "- كفر الشيخ"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "السواحل الشمالية",
                "location_en": "Northern Coasts",
                "location_fr": "Côtes nord",
                "governorate_ar": "كفر الشيخ",
                "governorate_en": "Kafr El Sheikh",
                "governorate_fr": "Kafr El Sheikh",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مصنع المعادن الثقيلة",
                    "factory_en": "Heavy Minerals Factory",
                    "factory_fr": "Usine de minéraux lourds",
                    "products": [
                      {
                        "product_ar": "معادن الرمال السوداء",
                        "product_en": "Black sand minerals",
                        "product_fr": "Minerais de sable noir",
                        "product_image": "/assets/images/Products/black_sand.webp",
                        "capacity": 150000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 50,
          "ar": "الشركة الوطنية للبترول",
          "en": "National Petroleum Company",
          "fr": "Société nationale des pétroles",
          "logo": "/assets/images/companies_logo/watanya.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/petroleum_distribution/1.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/petroleum_distribution/2.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/petroleum_distribution/3.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/petroleum_distribution/4.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              }
            ],
            "establishment_year": "1995",
            "description_ar": "أنشئت الشركة عام 1995 بهدف إنشاء وإدارة محطات خدمة وتموين السيارات (بنزين - الغاز الطبيعي - السولار) داخل وخارج المدن وتسويق المنتجات البترولية والزيوت والمشحمات. تعمل الشركة في مجال تسويق المنتجات البترولية (بنزين - سولار - زيوت - سولار خاصة) من خلال محطات خدمة تموين السيارات (وطنية) كما تقوم بتوفير أعمال التأمين الفني للسيارات من خلال مستأجري الخدمة الفنية في مجال ميكانيكا السيارات والكهرباء وضبط الزوايا وإصلاح الإطارات وغيرها من الخدمات المتعلقة بالإضافة إلى سلاسل الماركت والمطاعم الشهيرة.",
            "description_en": "Established in 1990 to create and manage car service and fueling stations (gasoline - natural gas - diesel) inside and outside cities and market petroleum products, oils and lubricants. The company works in marketing petroleum products (gasoline - diesel - oils - special diesel) through car fueling service stations (Wataniya) and also provides technical insurance services for cars through technical service tenants in the fields of car mechanics, electricity, wheel alignment, tire repair and other related services in addition to market chains and famous restaurants.",
            "description_fr": "Créée en 1990 pour créer et gérer des stations-service et de ravitaillement pour voitures (essence - gaz naturel - diesel) à l'intérieur et à l'extérieur des villes et commercialiser des produits pétroliers, des huiles et des lubrifiants. La société travaille dans la commercialisation de produits pétroliers (essence - diesel - huiles - diesel spécial) through car fueling service stations (Wataniya) et fournit également des services d'assurance technique pour les voitures through technical service tenants dans les domaines de la mécanique automobile, de l'électricité, du parallélisme des roues, de la réparation des pneus et d'autres services connexes en plus des chaînes de marché et des restaurants célèbres.",
            "products": [
              "البنزين",
              "الغاز الطبيعي",
              "السولار",
              "الزيوت",
              "المشحمات",
              "خدمات الصيانة الفنية للسيارات",
              "خدمات المطاعم والتسوق"
            ],
            "contact": {
              "address": "شارع محمود طلعت متفرع من شارع الطيران — مدينة نصر، القاهرة",
              "phone": "02-24024226",
              "fax": "02-24024226",
              "mobile": "01006017754",
              "email": ""
            },
            "headquarter": {
              "address": "10 شارع محمود طلعت - مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 55,
          "ar": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
          "en": "National Company for Selling and Distributing Petroleum Products",
          "fr": "Société nationale de vente et distribution des produits pétroliers",
          "logo": "/assets/images/companies_logo/Fuel2.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/petroleum_distribution/1.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/petroleum_distribution/2.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/petroleum_distribution/3.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/petroleum_distribution/4.webp",
                "title": "الشركة الوطنية لبيع وتوزيع المنتجات البترولية",
                "description": "محطات توزيع الوقود"
              }
            ],
            "establishment_year": "2014",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 1995 بهدف إقامة وتشغيل وإدارة محطات خدمة وتزويد السيارات وتقديم التأمين الفني للمحطات وطلمبات الوقود والمعدات الكهربائية. تقوم الشركة بتوفير وبيع وتوزيع المنتجات البترولية بالسوق المحلي وتقديم خدمات فنية متميزة في مجالات ميكانيكا السيارات والكهرباء كما تقوم بتزويد خدمة الغاز الطبيعي وتزويد/تحويل سيارات بالمحطات وخدمة الشحن الكهربائي للسيارات للتحول للطاقة النظيفة بالإضافة إلى تأمين نقل المواد البترولية لمحطات الشركة والغير بأحدث التقنيات والمعدات اللازمة لانتظام نقل المواد البترولية وتقوم الشركة بإنشاء محطات وقود Smart تمهيداً لتعميم التجربة على جميع المحطات والدعاية والإعلان بكافة الوسائل المسموعة والمقروءة والمرئية وتصميم المواقع الإلكترونية عبر الإنترنت.",
            "description_en": "An Egyptian joint stock company established in 1995 to establish, operate and manage service stations and car fueling, and provide technical insurance for stations, fuel pumps and electrical equipment. The company provides, sells and distributes petroleum products in the local market and provides distinguished technical services in the fields of car mechanics and electricity, also provides natural gas service and fueling/converting cars at stations and electric charging service for cars for the transition to clean energy in addition to securing the transportation of petroleum materials to the company's stations and others with the latest technologies and equipment necessary for the regularity of petroleum materials transportation, and the company establishes Smart fuel stations as a prelude to generalizing the experience to all stations and advertising through all audio, print and visual means and designing websites online.",
            "description_fr": "Une société égyptienne par actions créée en 1995 pour établir, exploiter et gérer des stations-service et le ravitaillement des voitures, et fournir une assurance technique pour les stations, les pompes à carburant et l'équipement électrique. La société fournit, vend et distribue des produits pétroliers sur le marché local et fournit des services techniques distingués dans les domaines de la mécanique automobile et de l'électricité, fournit également un service de gaz naturel et le ravitaillement/la conversion des voitures dans les stations et un service de charge électrique pour les voitures pour la transition vers l'énergie propre en plus d'assurer le transport des matières pétrolières vers les stations de la société et d'autres avec les dernières technologies et équipements nécessaires à la régularité du transport des matières pétrolières, et la société établit des stations-service intelligentes comme prélude à la généralisation de l'expérience à toutes les stations et à la publicité par tous les moyens audio, imprimés et visuels et à la conception de sites Web en ligne.",
            "products": [
              "المنتجات البترولية",
              "خدمات محطات الوقود",
              "خدمات الغاز الطبيعي",
              "الشحن الكهربائي للسيارات",
              "خدمات الصيانة الفنية"
            ],
            "contact": {
              "address": "إنشاء محمود طعت من شارع الطيران - مدينة نصر - القاهرة",
              "phone": "",
              "fax": "",
              "email": "info@watanya.org.eg"
            },
            "headquarter": {
              "address": "10 شارع محمود طلعت - مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مستودع الوقود",
                "location": "كم 58 شمال طر السويس - مدينة بدر",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "فرع نقل المواد البترولية",
                "location": "كم 58 شمال طر السويس - مدينة بدر",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "المركز الفني",
                "location": "حملة رئاسة الشركة كم 4،5 ألماظة",
                "governorate": "القاهرة"
              },
              {
                "unit_name": "محطات خدمة وتموين سيارات (وطنية)",
                "location": "مختلف محافظات الجمهورية",
                "governorate": "غير محدد"
              }
            ],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 56,
          "ar": "الشركة الوطنية المصرية لإستكشاف وتنمية البترول",
          "en": "National Egyptian Company for Petroleum Exploration and Development",
          "fr": "Société nationale égyptienne d'exploration et de développement pétrolier",
          "logo": "/assets/images/companies_logo/petrol.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/petroleum_exploration/1.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/petroleum_exploration/2.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/petroleum_exploration/3.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 4,
                "url": "/assets/images/comp_factories/petroleum_exploration/4.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 5,
                "url": "/assets/images/comp_factories/petroleum_exploration/5.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 6,
                "url": "/assets/images/comp_factories/petroleum_exploration/6.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 7,
                "url": "/assets/images/comp_factories/petroleum_exploration/7.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 8,
                "url": "/assets/images/comp_factories/petroleum_exploration/8.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 9,
                "url": "/assets/images/comp_factories/petroleum_exploration/9.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 10,
                "url": "/assets/images/comp_factories/petroleum_exploration/10.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 11,
                "url": "/assets/images/comp_factories/petroleum_exploration/11.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 12,
                "url": "/assets/images/comp_factories/petroleum_exploration/12.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              },
              {
                "id": 13,
                "url": "/assets/images/comp_factories/petroleum_exploration/13.webp",
                "title": "الشركة الوطنية لإستكشاف البترول",
                "description": "عمليات استكشاف البترول"
              }
            ],
            "establishment_year": "2017",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2017 بهدف تدعيم وتطوير مصادر الثروة البترولية وحسن استغلالها بما يكفل تحقيق خطط التنمية وزيادة الناتج القومي وبناء وتأهيل كوادر فنية للعمل في مجالات البحث واستكشاف واستخراج البترول والإسهام في تأمين إمدادات الطاقة بأسعار مناسبة بالإضافة إلى العمل على الاستفادة من الشركات العالمية لاستكشاف واستخراج البترول. تعمل الشركة على استكشاف واستخراج الزيت الخام بمناطق امتياز الشركة وتنمية وزيادة إنتاجية حقول البترول المكتشفة والمشاركة بالمشروعات القومية في مجال البترول والتي تدعم الاقتصاد القومي المصري.",
            "description_en": "An Egyptian joint stock company established in 2017 to strengthen and develop petroleum wealth sources and their proper utilization to ensure achieving development plans and increasing national product, building and qualifying technical cadres to work in the fields of research, exploration and extraction of petroleum, and contributing to securing energy supplies at appropriate prices in addition to working on benefiting from international companies for petroleum exploration and extraction. The company works on exploring and extracting crude oil in the company's concession areas, developing and increasing the productivity of discovered oil fields, and participating in national petroleum projects that support the Egyptian national economy.",
            "description_fr": "Une société égyptienne par actions créée en 2017 pour renforcer et développer les sources de richesse pétrolière et leur utilisation appropriée pour assurer la réalisation des plans de développement et l'augmentation du produit national, construire et qualifier des cadres techniques pour travailler dans les domaines de la recherche, de l'exploration et de l'extraction du pétrole, et contribuer à sécuriser les approvisionnements énergétiques à des prix appropriés en plus de travailler à tirer parti des entreprises internationales pour l'exploration et l'extraction pétrolières. La société travaille à l'exploration et à l'extraction du pétrole brut dans les zones de concession de la société, au développement et à l'augmentation de la productivité des champs pétrolifères découverts, et à la participation aux projets pétroliers nationaux qui soutiennent l'économie nationale égyptienne.",
            "products": [
              "استكشاف البترول",
              "استخراج الزيت الخام",
              "تنمية حقول البترول",
              "البترول والغاز"
            ],
            "contact": {
              "address": "برج الصفوة – شارع الميثاق – زهراء مدينة نصر، القاهرة",
              "phone": "20484479",
              "fax": "20484480",
              "email": "enpedco@mod.gov.eg"
            },
            "headquarter": {
              "address": "القطع (s1-2 s2-3) الحى الثانى التجمع الخامس",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "منطقة أمتياز جنوب شرق رأس قطارة.",
                "location": "كم 100 محور الضبعة",
                "governorate": "الجيزة- البحيرة"
              },
              {
                "unit_name": "منطقة أمتياز جنوب شرق أبو سنان .",
                "location": "كم 200 طريق الواحات منطقة ابو الغراديق",
                "governorate": "الفيوم- مطروح"
              },
              {
                "unit_name": "منطقة حقل جنوب غرب وادى الريان .",
                "location": "طريق الواحات كم 110 طريق الجيزة الواحات",
                "governorate": "الفيوم"
              }
            ],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 57,
          "ar": "الشركة الوطنية للوقود ومشتقات البترول وخدماته المتكاملة (بورصة)",
          "en": "National Company for Fuel, Petroleum Derivatives and Integrated Services (Stock Exchange)",
          "fr": "Société nationale des combustibles, dérivés pétroliers et services intégrés (Bourse)",
          "logo": "/assets/images/companies_logo/watanya.webp",
          "details": {
            "Gallary": [],
            "establishment_year": "2022",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2022 بهدف إقامة وتشغيل وإدارة محطات خدمة وتموين السيارات. تقوم الشركة بتشغيل وإدارة محطات خدمة تموين السيارات وإقامة وتشغيل وإدارة المخازن (عدة مخازن كيمياوية) والقيام بخدمات النقل البري للمنتجات البترولية والبضائع وإدارة وتشغيل المراكز التجارية وبيع وتوزيع المنتجات البترولية كما تعمل الشركة في مجال الدعاية والإعلان بكافة الوسائل المسموعة والمقروءة والمرئية وتصميم المواقع الإلكترونية والمقاولات العامة والمتخصصة والمتكاملة والتوريدات العمومية.",
            "description_en": "An Egyptian joint stock company established in 2018 to establish, operate and manage car service and fueling stations. The company operates and manages car fueling service stations, establishes, operates and manages warehouses (several chemical warehouses), provides land transport services for petroleum products and goods, manages and operates commercial centers, sells and distributes petroleum products, and the company also works in advertising through all audio, print and visual means, website design, general, specialized and integrated contracting, and public supplies.",
            "description_fr": "Une société égyptienne par actions créée en 2018 pour établir, exploiter et gérer des stations-service et de ravitaillement pour voitures. La société exploite et gère des stations-service de ravitaillement pour voitures, établit, exploite et gère des entrepôts (plusieurs entrepôts chimiques), fournit des services de transport terrestre pour les produits pétroliers et les marchandises, gère et exploite des centres commerciaux, vend et distribue des produits pétroliers, et la société travaille également dans la publicité through all audio, print and visual means, la conception de sites Web, le BTP général, spécialisé et intégré, et les approvisionnements publics.",
            "products": [
              "خدمات محطات الوقود",
              "إدارة المخازن",
              "النقل البري",
              "إدارة المراكز التجارية",
              "توزيع المنتجات البترولية",
              "خدمات الدعاية والإعلان",
              "المقاولات العامة"
            ],
            "contact": {
              "address": "إنشاء محمود طعت من شارع الطيران - مدينة نصر - القاهرة",
              "phone": "",
              "fax": "",
              "email": "info@watanya.org.eg"
            },
            "headquarter": {
              "address": "10 شارع محمود طلعت - مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 58,
          "ar": "شركة أم جي أي لتصنيع المعادن الثمينة (MGI)",
          "en": "MGI for Precious Metals Manufacturing Company",
          "fr": "MGI pour la fabrication de métaux précieux",
          "logo": "/assets/images/companies_logo/mg.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/mgi/1.webp",
                "title": "شركة أم جي أي للمعادن الثمينة",
                "description": "تصنيع المعادن الثمينة"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/mgi/2.webp",
                "title": "شركة أم جي أي للمعادن الثمينة",
                "description": "تصنيع المعادن الثمينة"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/mgi/3.webp",
                "title": "شركة أم جي أي للمعادن الثمينة",
                "description": "تصنيع المعادن الثمينة"
              }
            ],
            "establishment_year": 2021,
            "description_ar": "تختص الشركة في تصنيع وتشكيل المعادن الثمينة مثل الذهب والفضة والبلاتين.",
            "description_en": "The company specializes in manufacturing and shaping precious metals such as gold, silver and platinum.",
            "description_fr": "La société est spécialisée dans la fabrication et la mise en forme de métaux précieux tels que l'or, l'argent et le platine.",
            "locations": [
              {
                "location_ar": "المصنع الرئيسي",
                "location_en": "Main Factory",
                "location_fr": "Usine principale",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": [
                  {
                    "factory_ar": "مصنع المعادن الثمينة",
                    "factory_en": "Precious Metals Factory",
                    "factory_fr": "Usine de métaux précieux",
                    "products": [
                      {
                        "product_ar": "مشغولات ذهبية وفضية",
                        "product_en": "Gold and silver products",
                        "product_fr": "Produits en or et argent",
                        "product_image": "/assets/images/Products/precious_metals.webp",
                        "capacity": 5000,
                        "unit_ar": "كجم/عام",
                        "unit_en": "kg/year",
                        "unit_fr": "kg/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "رئاسة الجهاز بالهايكستب ",
              "governorate": "القاهرة"
            },
            "units": []
          },
          "number_of_factories": 5
        },
        {
          "id": 59,
          "ar": "شركة شلاتين للثروة المعدنية",
          "en": "Shalateen Mineral Wealth Company",
          "fr": "Société Shalateen des richesses minérales",
          "logo": "/assets/images/companies_logo/shalateen.webp",
          "link":"https://smrc.com.eg",

          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/shalateen/1.webp",
                "title": "شركة شلاتين للثروة المعدنية",
                "description": "استخراج الثروات المعدنية"
              },
              {
                "id": 2,
                "url": "/assets/images/comp_factories/shalateen/2.webp",
                "title": "شركة شلاتين للثروة المعدنية",
                "description": "استخراج الثروات المعدنية"
              },
              {
                "id": 3,
                "url": "/assets/images/comp_factories/shalateen/3.webp",
                "title": "شركة شلاتين للثروة المعدنية",
                "description": "استخراج الثروات المعدنية"
              }
            ],
            "establishment_year": "2012",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2012 بهدف الاستغلال الأمثل للخامات والمعادن الثمينة واستغلال العائد منها. تعمل الشركة في مجال استخراج الذهب والمعادن من مناطق شلاتين: أبو رماد - وادي العلاقي - مرسى علم (للقضاء على ظاهرة التنقيب العشوائي).",
            "description_en": "An Egyptian joint stock company established in 2013 to optimally exploit precious ores and minerals and utilize their returns. The company works in extracting gold and minerals from Shalatein areas: Abu Ramad - Wadi Al-Allaqi - Marsa Alam (to eliminate the phenomenon of random prospecting).",
            "description_fr": "Une société égyptienne par actions créée en 2013 pour exploiter de manière optimale les minerais et minéraux précieux et utiliser leurs retours. L'entreprise travaille dans l'extraction de l'or et des minéraux des zones de Shalatein : Abu Ramad - Wadi Al-Allaqi - Marsa Alam (pour éliminer le phénomène de prospection aléatoire).",
            "products": ["الذهب", "المعادن الثمينة"],
            "contact": {
              "address": "3 شارع صلاح سالم – العباسية، القاهرة",
              "phone": "02-24862370",
              "fax": "02-24862371",
              "email": "shalateen@smrc.com.eg"
            },
            "headquarter": {
              "address": "3 شارع صلاح سالم – العباسية",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "فرع شلاتين",
                "location": "وحدة رقم (50) – الرحبة / قبور المشايخ",
                "governorate": "شلاتين"
              },
              {
                "unit_name": "فرع أسوان",
                "location": "المدينة الصناعية / مبنى هيئة الثروة المعدنية",
                "governorate": "أسوان"
              },
              {
                "unit_name": "فرع مرسى علم",
                "location": "شارع 13 عمارة 22 أمام كافية مرسى علم",
                "governorate": "البحر الأحمر"
              },
              {
                "unit_name": "فرع إدفو",
                "location": "شرق شارع شرق المحطة / إدفو",
                "governorate": "اسوان"
              }
            ],
            "locations": [
              {
                "location_ar": "منطقة شلاتين",
                "location_en": "Shalateen Area",
                "location_fr": "Région de Shalateen",
                "governorate_ar": "البحر الأحمر",
                "governorate_en": "Red Sea",
                "governorate_fr": "Mer Rouge",
                "formation_ar": "ج 3 ميد",
                "formation_en": "G 3 Mid",
                "formation_fr": "G 3 Mid",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 60,
          "ar": "الشركة المصرية للأملاح والمعادن (إميسال)",
          "en": "Egyptian Salts and Minerals Company (EMISAL)",
          "fr": "Société égyptienne des sels et minéraux (EMISAL)",
          "logo": "/assets/images/companies_logo/Amisal.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/emisal/1.webp",
                "title": "الشركة المصرية للأملاح والمعادن",
                "description": "إنتاج الأملاح والمعادن"
              }
            ],
            "establishment_year": "1984",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 1984 وساهم جهاز مشروعات الخدمة الوطنية فيها عام 2020 بهدف السيطرة على بحيرة قارون التاريخية بالتحكم في ملوحة البحيرة وكذلك توفير الملح الصخري وخفض فاتورة الاستيراد.",
            "description_en": "Egyptian joint stock company established in 1984 and joined by National Service Projects Organization in 2020 to control historical Lake Qarun by managing lake salinity and provide rock salt and reduce import bill.",
            "description_fr": "Société égyptienne par actions créée en 1984 et rejointe par l'Organisation des projets de service national en 2020 pour contrôler le lac historique Qaroun en gérant la salinité du lac et fournir du sel gemme et réduire la facture d'importation.",
            "products": [
              "كبريتات الصوديوم اللامائية",
              "ملح الأفران",
              "ملح يونو",
              "ملح يونو لايت منخفض الصوديوم",
              "ملح يونو إكسترا رشاش",
              "سماد سلفات المغنسيوم",
              "ملح طعام مكرر يودي/غير يودي",
              "ملح فاكيوم يودي/غير يودي",
              "ملح كلوريد الصوديوم للاستخدامات الطبية"
            ],
            "contact": {
              "address": "شكشوك - مركز ابشوي - الفيوم",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "شكشوك –  مركز  أبشواى ",
              "governorate": "الفيوم"
            },
            "units": [
              {
                "unit_name": "-  مكتب التسويق والمبيعات ",
                "location": "شارع الوحدة الأفريقية - ميدان المساحة - الدقى",
                "governorate": "القاهرة"
              }
            ],
            "locations": [
              {
                "location_ar": "مناطق الإنتاج",
                "location_en": "Production Areas",
                "location_fr": "Zones de production",
                "governorate_ar": "وادي النطرون",
                "governorate_en": "Wadi El Natrun",
                "governorate_fr": "Wadi El Natroun",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "مصنع الأملاح",
                    "factory_en": "Salt Factory",
                    "factory_fr": "Usine de sel",
                    "products": [
                      {
                        "product_ar": "أملاح صناعية وغذائية",
                        "product_en": "Industrial and food salts",
                        "product_fr": "Sels industriels et alimentaires",
                        "product_image": "/assets/images/Products/salts.webp",
                        "capacity": 100000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 61,
          "ar": "الشركة المصرية لتسويق الفوسفات والأسمدة الفوسفاتية (إمفكو)",
          "en": "Egyptian Company for Marketing Phosphate and Phosphate Fertilizers (EMFCO)",
          "fr": "Société égyptienne de commercialisation des phosphates et engrais phosphatés (EMFCO)",
          "logo": "/assets/images/companies_logo/Phosphate.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/emfco/1.webp",
                "title": "الشركة المصرية لتسويق الفوسفات",
                "description": "تسويق الفوسفات والأسمدة"
              }
            ],
            "establishment_year": "2018",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2018 بهدف توحيد سوق خام الفوسفات بحيث تكون الوكيل التجاري لمنتجي الفوسفات في مصر وتحقيق أعلى عائد وحصيلة تصديرية من تصدير خامات الفوسفات لصالح الصالح القومي المصري والحفاظ على أسعار الخامات المصرية في الأسواق العالمية ومنع التلاعب من قبل الشركات التجارية والمصدرين.",
            "description_en": "Egyptian joint stock company established in 2018 to unify the phosphate ore market as commercial agent for phosphate producers in Egypt, achieve highest returns and export revenue from phosphate ore exports for Egyptian national interest, and maintain prices of Egyptian ores in global markets.",
            "description_fr": "Société égyptienne par actions créée en 2018 pour unifier le marché du minerai de phosphate en tant qu'agent commercial des producteurs de phosphate en Égypte, réaliser les rendements et revenus d'exportation les plus élevés des exportations de minerai de phosphate pour l'intérêt national égyptien, et maintenir les prix des minerais égyptiens sur les marchés mondiaux.",
            "products": [
              "فوسفات خام",
              "حامض الفوسفوريك",
              "الأسمدة (SSP - TSP - DAP - MAP - NPK)"
            ],
            "contact": {
              "address": "حي الماظة - مبنى رقم (10) بجوار بانورا مول - التجمع الخامس - القاهرة الجديدة - القاهرة",
              "phone": "",
              "fax": "",
              "email": "info@emphco.com"
            },
            "headquarter": {
              "address": "    ارابيلا مول-محور محمد نجيب التجمع الخامس ",
              "governorate": "القاهرة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 62,
          "ar": "شركة أسيوط الوطنية لتصنيع البترول (أنوبك)",
          "en": "Assiut National Petroleum Manufacturing Company (ANOPC)",
          "fr": "Société nationale de fabrication pétrolière d'Assiout (ANOPC)",
          "logo": "/assets/images/companies_logo/ANOPC.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/anopc/1.webp",
                "title": "شركة أسيوط الوطنية لتصنيع البترول",
                "description": "مصفاة أسيوط للبترول"
              }
            ],
            "establishment_year": 2019,
            "description_ar": "تختص الشركة في تكرير البترول وإنتاج المشتقات البترولية في مصفاة أسيوط.",
            "description_en": "The company specializes in petroleum refining and production of petroleum derivatives at the Assiut refinery.",
            "description_fr": "La société est spécialisée dans le raffinage du pétrole et la production de dérivés pétroliers à la raffinerie d'Assiout.",
            "locations": [
              {
                "location_ar": "مصفاة أسيوط",
                "location_en": "Assiut Refinery",
                "location_fr": "Raffinerie d'Assiout",
                "governorate_ar": "أسيوط",
                "governorate_en": "Assiut",
                "governorate_fr": "Assiout",
                "formation_ar": "م ج ع",
                "formation_en": "M G A",
                "formation_fr": "M G A",
                "factories": [
                  {
                    "factory_ar": "مصفاة البترول",
                    "factory_en": "Petroleum Refinery",
                    "factory_fr": "Raffinerie de pétrole",
                    "products": [
                      {
                        "product_ar": "مشتقات بترولية",
                        "product_en": "Petroleum derivatives",
                        "product_fr": "Dérivés pétroliers",
                        "product_image": "/assets/images/Products/petroleum_products.webp",
                        "capacity": 2500000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ],
            "headquarter": {
              "address": "27 شارع السلام - منطقة زهرة اللوتس - التجمع الخامس القاهرة الجديدة",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مصانع الشركة",
                "location": "المنطقة الصناعية بأسيوط",
                "governorate": "اسيوط"
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 63,
          "ar": "شركة البحر الأحمر الوطنية للتكرير والبتروكيماويات",
          "en": "National Red Sea Refining and Petrochemicals Company",
          "fr": "Société nationale de raffinage et pétrochimie de la mer Rouge",
          "logo": "/assets/images/companies_logo/RedSea.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/red_sea/1.webp",
                "title": "شركة البحر الأحمر للتكرير والبتروكيماويات",
                "description": "مشروع التكرير والبتروكيماويات"
              }
            ],
            "establishment_year": "2019",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2019 بهدف تصميم القيمة المضافة للمنتجات البترولية وتقليل الاعتماد على استيرادها وتوفير العملات الأجنبية. تنتج الشركة البولي إيثيلين - بولي بروبيلين - بولي أستر- مونو إيثيلين جليكول - داي إيثيلين جليكول - حامض تيرفثاليك النقي - بنزين - وقود سفن قليل الكبريت.",
            "description_en": "An Egyptian joint stock company established in 2019 to design added value for petroleum products, reduce dependence on their import, and save foreign currency. The company produces polyethylene - polypropylene - polyester- mono ethylene glycol - diethylene glycol - pure terephthalic acid - benzene - low sulfur ship fuel.",
            "description_fr": "Une société égyptienne par actions créée en 2019 pour concevoir de la valeur ajoutée pour les produits pétroliers, réduire la dépendance à leur importation et économiser des devises étrangères. La société produit du polyéthylène - du polypropylène - du polyester- du monoéthylène glycol - du diéthylène glycol - de l'acide téréphtalique pur - du benzène - du carburant pour navires à faible teneur en soufre.",
            "products": [
              "البولي إيثيلين",
              "البولي بروبيلين",
              "البولي أستر",
              "مونو إيثيلين جليكول",
              "داي إيثيلين جليكول",
              "حامض تيرفثاليك النقي",
              "البنزين",
              "وقود السفن قليل الكبريت"
            ],
            "contact": {
              "address": "منطقة العين السخنة - المنطقة الاقتصادية لقناة السويس - السويس",
              "phone": "+20 -2672-8740",
              "fax": "+20 -2672-8749",
              "email": "info@redsea-egypt.com"
            },
            "headquarter": {
              "address": "مبنى انبى بحى السفارات -  مدينة نصر",
              "governorate": "القاهرة"
            },
            "units": [
              {
                "unit_name": "مقر الشركة",
                "location": " مبنى المنطقة الإقتصادية بالعين السخنة ",
                "governorate": "السويس"
              },
              {
                "unit_name": "مصانع الشركة",
                "location": "موقع شركة النصر للأسمدة  ",
                "governorate": "السويس"
              }
            ],
            "locations": [
              {
                "location_ar": "ساحل البحر الأحمر",
                "location_en": "Red Sea Coast",
                "location_fr": "Côte de la mer Rouge",
                "governorate_ar": "البحر الأحمر",
                "governorate_en": "Red Sea",
                "governorate_fr": "Mer Rouge",
                "formation_ar": "ج 3 ميد",
                "formation_en": "G 3 Mid",
                "formation_fr": "G 3 Mid",
                "factories": [
                  {
                    "factory_ar": "مجمع التكرير والبتروكيماويات",
                    "factory_en": "Refining and Petrochemical Complex",
                    "factory_fr": "Complexe de raffinage et pétrochimique",
                    "products": [
                      {
                        "product_ar": "منتجات بترولية وبتروكيماوية",
                        "product_en": "Petroleum and petrochemical products",
                        "product_fr": "Produits pétroliers et pétrochimiques",
                        "product_image": "/assets/images/Products/petrochemicals.webp",
                        "capacity": 3000000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 64,
          "ar": "شركة دمياط لإسالة الغاز الطبيعى",
          "en": "Damietta Natural Gas Liquefaction Company",
          "fr": "Société de liquéfaction de gaz naturel de Damiette",
          "logo": "/assets/images/companies_logo/DLNG.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/damietta_gas/1.webp",
                "title": "شركة دمياط لإسالة الغاز الطبيعي",
                "description": "محطة إسالة الغاز الطبيعي"
              }
            ],
            "establishment_year": "2001",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2001 بهدف إنشاء وتنمية وامتلاك وتشغيل مصنع إسالة الغاز الطبيعي ومزاولة الأنشطة المرتبطة بصناعة البترول والمحروقات. تنتج الشركة الغاز الطبيعي المسال وتصدر الشركة الغاز المسال ومنتجات إسالة الغاز.",
            "description_en": "An Egyptian joint stock company established in 2019 to create, develop, own and operate a natural gas liquefaction plant and practice activities related to the petroleum and fuels industry. The company produces liquefied natural gas and the company exports liquefied gas and gas liquefaction products.",
            "description_fr": "Une société égyptienne par actions créée en 2019 pour créer, développer, posséder et exploiter une usine de liquéfaction de gaz naturel et exercer des activités liées à l'industrie pétrolière et des carburants. La société produit du gaz naturel liquéfié et la société exporte du gaz liquéfié et des produits de liquéfaction de gaz.",
            "products": ["الغاز الطبيعي المسال", "منتجات إسالة الغاز"],
            "contact": {
              "address": "المنطقة الحرة الخاصة - ميناء دمياط - دمياط",
              "phone": "",
              "fax": "",
              "email": "mdoffice@ding.com"
            },
            "headquarter": {
              "address": "21 برج الميل الإدارى -  شارع شارل ديجول ",
              "governorate": "الجيزة"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "محطة دمياط",
                "location_en": "Damietta Plant",
                "location_fr": "Usine de Damiette",
                "governorate_ar": "دمياط",
                "governorate_en": "Damietta",
                "governorate_fr": "Damiette",
                "formation_ar": "م ش ع",
                "formation_en": "M Sh A",
                "formation_fr": "M Sh A",
                "factories": [
                  {
                    "factory_ar": "محطة إسالة الغاز",
                    "factory_en": "Gas Liquefaction Plant",
                    "factory_fr": "Usine de liquéfaction de gaz",
                    "products": [
                      {
                        "product_ar": "غاز طبيعي مسال",
                        "product_en": "Liquefied Natural Gas (LNG)",
                        "product_fr": "Gaz naturel liquéfié (GNL)",
                        "product_image": "/assets/images/Products/lng.webp",
                        "capacity": 7500000,
                        "unit_ar": "طن/عام",
                        "unit_en": "tons/year",
                        "unit_fr": "tonnes/an"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "number_of_factories": 5
        },
        {
          "id": 65,
          "ar": "شركة وثبة للخدمات البترولية",
          "en": "Watba Petroleum Services Company",
          "fr": "Société Watba des services pétroliers",
          "logo": "/assets/images/companies_logo/waspa.webp",
          "details": {
            "Gallary": [
              {
                "id": 1,
                "url": "/assets/images/comp_factories/watba/1.webp",
                "title": "شركة وثبة للخدمات البترولية",
                "description": "خدمات بترولية متكاملة"
              }
            ],
            "establishment_year": "2022",
            "description_ar": "شركة مساهمة مصرية أنشئت عام 2022 بهدف تصميم وإنشاء وإنتاج وإدارة وتشغيل وصيانة محطات توليد الكهرباء والطاقة على اختلاف مصادرها وشركات توابعها وأنواعها. تقوم الشركة بإنتاج وتكرير المنتجات البترولية والغاز الطبيعي والبتروكيماويات (أولية - وسيطة - نهائية) وتعبئة الغاز وتخزين الزيت الخام، والمنتجات البترولية وتعبئة البروبان كما تقوم الشركة بتجارة الجملة والتجزئة للمنتجات البترولية بكافة أنواعها.",
            "description_en": "An Egyptian joint stock company established in 2013 to design, create, produce, manage, operate and maintain electricity and power generation stations of various sources, their subsidiaries and types. The company produces and refines petroleum products, natural gas and petrochemicals (primary - intermediate - final), gas filling, crude oil storage, petroleum products and propane filling, and the company also trades wholesale and retail of petroleum products of all kinds.",
            "description_fr": "Une société égyptienne par actions créée en 2013 pour concevoir, créer, produire, gérer, exploiter et entretenir des stations de production d'électricité et d'énergie de diverses sources, leurs filiales et types. La société produit et raffine des produits pétroliers, du gaz naturel et des pétrochimiques (primaires - intermédiaires - finaux), remplit du gaz, stocke du pétrole brut, des produits pétroliers et remplit du propane, et la société commerce également en gros et au détail des produits pétroliers de toutes sortes.",
            "products": [
              "إنتاج الكهرباء",
              "تكرير المنتجات البترولية",
              "الغاز الطبيعي",
              "البتروكيماويات",
              "تعبئة الغاز",
              "تخزين الزيت الخام",
              "تجارة الجملة والتجزئة للمنتجات البترولية"
            ],
            "contact": {
              "address": "القليوبية - شارع الضبعة - مسطرد",
              "phone": "",
              "fax": "",
              "email": ""
            },
            "headquarter": {
              "address": "المبنى الإدارى بجوار الشركة المصرية للتكرير مسطرد - شبرا الخيمة",
              "governorate": "القليوبية"
            },
            "units": [],
            "locations": [
              {
                "location_ar": "المقر الرئيسي",
                "location_en": "Headquarters",
                "location_fr": "Siège social",
                "governorate_ar": "القاهرة",
                "governorate_en": "Cairo",
                "governorate_fr": "Le Caire",
                "formation_ar": "م م ع",
                "formation_en": "M M A",
                "formation_fr": "M M A",
                "factories": []
              }
            ]
          },
          "number_of_factories": 5
        }
      ]
    }
  ]
};

const seedDatabase = async () => {
  try {
    // Check if MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Company.deleteMany({});
    console.log('✅ Cleared companies collection');

    // Transform and insert data
    const companies = [];
    
    companiesData.companies.forEach((sector, sectorIndex) => {
      console.log(`📌 Processing sector ${sectorIndex + 1}: ${sector.sector_en}`);
      
      sector.companies.forEach((company, companyIndex) => {
        console.log(`  📝 Adding company ${companyIndex + 1}: ${company.en}`);
        
        // تأكد من وجود details object
        const details = company.details || {};
        
        companies.push(
          {
          id: new mongoose.Types.ObjectId().toString(),
          name_ar: company.ar,
          name_en: company.en,
          name_fr: company.fr,
          sector_ar: sector.sector_ar,
          sector_en: sector.sector_en,
          sector_fr: sector.sector_fr,
          gradient: sector.gradient,
          logo: company.logo,
          number_of_factories: company.number_of_factories || 0,
          
          // Details object كامل
          details: {
            // Gallery
            Gallary: details.Gallary || [],
            website: company.link || details.website || "",
            // Basic info
            establishment_year: details.establishment_year || "",
            
            // Descriptions
            description_ar: details.description_ar || "",
            description_en: details.description_en || "",
            description_fr: details.description_fr || "",
            
            // Products arrays
            products_ar: details.products_ar || details.products || [],
            products_en: details.products_en || details.products || [],
            products_fr: details.products_fr || details.products || [],
            
            // Contact info
            contact: details.contact || {
              address_ar: "",
              address_en: "",
              address_fr: "",
              phone: "",
              fax: "",
              email: ""
            },
            
            // Locations with factories and products
            locations: (details.locations || []).map(loc => ({
              location_ar: loc.location_ar || "",
              location_en: loc.location_en || "",
              location_fr: loc.location_fr || "",
              governorate_ar: loc.governorate_ar || "",
              governorate_en: loc.governorate_en || "",
              governorate_fr: loc.governorate_fr || "",
              formation_ar: loc.formation_ar || "",
              formation_en: loc.formation_en || "",
              formation_fr: loc.formation_fr || "",
              factories: (loc.factories || []).map(factory => ({
                factory_ar: factory.factory_ar || "",
                factory_en: factory.factory_en || "",
                factory_fr: factory.factory_fr || "",
                products: (factory.products || []).map(product => ({
                  product_ar: product.product_ar || "",
                  product_en: product.product_en || "",
                  product_fr: product.product_fr || "",
                  product_image: product.product_image || "",
                  capacity: product.capacity || 0,
                  unit_ar: product.unit_ar || "",
                  unit_en: product.unit_en || "",
                  unit_fr: product.unit_fr || ""
                }))
              }))
            })),
            
            // Headquarter
            headquarter: details.headquarter || {
              address_ar: "",
              address_en: "",
              address_fr: "",
              governorate_ar: "",
              governorate_en: "",
              governorate_fr: ""
            },
            
            // Units
            units: (details.units || []).map(unit => ({
              unit_name_ar: unit.unit_name_ar || unit.unit_name || "",
              unit_name_en: unit.unit_name_en || unit.unit_name || "",
              unit_name_fr: unit.unit_name_fr || unit.unit_name || "",
              location_ar: unit.location_ar || unit.location || "",
              location_en: unit.location_en || unit.location || "",
              location_fr: unit.location_fr || unit.location || "",
              governorate_ar: unit.governorate_ar || unit.governorate || "",
              governorate_en: unit.governorate_en || unit.governorate || "",
              governorate_fr: unit.governorate_fr || unit.governorate || ""
            }))
          },
          
          // Investment opportunities
          investment_opportunities: (company.investment_opportunities || []).map(opp => ({
            id: opp.id,
            title_ar: opp.title_ar || opp.ar || "",
            title_en: opp.title_en || opp.en || "",
            title_fr: opp.title_fr || opp.fr || "",
            summary_ar: opp.summary_ar || opp.summary || "",
            summary_en: opp.summary_en || opp.summary || "",
            summary_fr: opp.summary_fr || opp.summary || "",
            description_ar: opp.description_ar || opp.description || "",
            description_en: opp.description_en || opp.description || "",
            description_fr: opp.description_fr || opp.description || "",
            investment_type_ar: opp.investment_type_ar || opp.investment_type || "",
            investment_type_en: opp.investment_type_en || opp.investment_type || "",
            investment_type_fr: opp.investment_type_fr || opp.investment_type || "",
            estimated_investment: opp.estimated_investment || 0,
            currency: opp.currency || "EGP",
            expected_roi: opp.expected_roi || 0,
            project_duration_months: opp.project_duration_months || 0,
            status_ar: opp.status_ar || opp.status || "متاحة",
            status_en: opp.status_en || opp.status || "Available",
            status_fr: opp.status_fr || opp.status || "Disponible",
            location_ar: opp.location_ar || opp.location || "",
            location_en: opp.location_en || opp.location || "",
            location_fr: opp.location_fr || opp.location || "",
            governorate_ar: opp.governorate_ar || opp.governorate || "",
            governorate_en: opp.governorate_en || opp.governorate || "",
            governorate_fr: opp.governorate_fr || opp.governorate || "",
            benefits_ar: opp.benefits_ar || opp.benefits || [],
            benefits_en: opp.benefits_en || opp.benefits || [],
            benefits_fr: opp.benefits_fr || opp.benefits || [],
            requirements_ar: opp.requirements_ar || opp.requirements || [],
            requirements_en: opp.requirements_en || opp.requirements || [],
            requirements_fr: opp.requirements_fr || opp.requirements || [],
            images: (opp.images || []).map(img => ({
              url: img.url || "",
              title_ar: img.title_ar || img.title || "",
              title_en: img.title_en || img.title || "",
              title_fr: img.title_fr || img.title || "",
              is_main: img.is_main || false
            })),
            contact_person_ar: opp.contact_person_ar || opp.contact_person || "",
            contact_person_en: opp.contact_person_en || opp.contact_person || "",
            contact_person_fr: opp.contact_person_fr || opp.contact_person || "",
            contact_email: opp.contact_email || "",
            contact_phone: opp.contact_phone || "",
            is_featured: opp.is_featured || false,
            expiry_date: opp.expiry_date || null
          }))
          }
      );
      });
    });

    // Insert all companies
    const result = await Company.insertMany(companies);
    console.log(`\n✅ Inserted ${result.length} companies successfully`);

    // Detailed summary
    console.log('\n📊 Seeding Summary:');
    console.log('=' .repeat(50));
    console.log(`Total Companies: ${result.length}`);
    
    // Count statistics
    let totalGallary = 0;
    let totalLocations = 0;
    let totalFactories = 0;
    let totalProducts = 0;
    let totalUnits = 0;
    let totalInvestments = 0;
    
    result.forEach(company => {
      if (company.details) {
        totalGallary += company.details.Gallary?.length || 0;
        totalLocations += company.details.locations?.length || 0;
        
        company.details.locations?.forEach(loc => {
          totalFactories += loc.factories?.length || 0;
          loc.factories?.forEach(factory => {
            totalProducts += factory.products?.length || 0;
          });
        });
        
        totalUnits += company.details.units?.length || 0;
      }
      totalInvestments += company.investment_opportunities?.length || 0;
    });
    
    console.log(`Total Gallery Images: ${totalGallary}`);
    console.log(`Total Locations: ${totalLocations}`);
    console.log(`Total Factories: ${totalFactories}`);
    console.log(`Total Products: ${totalProducts}`);
    console.log(`Total Units: ${totalUnits}`);
    console.log(`Total Investment Opportunities: ${totalInvestments}`);
    
    // Show sample
    if (result.length > 0) {
      console.log('\n🔍 Sample Company:');
      console.log('-' .repeat(30));
      const sample = result[0];
      console.log(`ID: ${sample.id}`);
      console.log(`Name (EN): ${sample.name_en}`);
      console.log(`Sector: ${sample.sector_en}`);
      console.log(`Factories: ${sample.number_of_factories}`);
      console.log(`Units: ${sample.details.units?.length || 0}`);
      console.log(`Gallery Images: ${sample.details.Gallary?.length || 0}`);
      console.log(`Investment Opportunities: ${sample.investment_opportunities?.length || 0}`);
    }

  } catch (error) {
    console.error('\n❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
};

// Run seeding
seedDatabase().catch(console.error);