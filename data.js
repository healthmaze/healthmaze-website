/* HealthMaze directory data. Last checked: October 2026.
   Edit a line, save, and redeploy. "verify": true means call the clinic to confirm before trusting it. */
window.HM_UPDATED = "2026-10";
window.HM_CLINICS = [
 {
  "id": "lscc-el-buen-samaritano",
  "name": "El Buen Samaritano (LSCC)",
  "org": "Lone Star Circle of Care",
  "area": "Westgate / South Austin",
  "address": "7000 Woodhue Dr., Building B, Austin, TX 78745",
  "lat": 30.2085,
  "lng": -97.8205,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-el-buen-samaritano/",
  "hours": "Mon-Fri 7am-6pm (family medicine)",
  "hours_es": "lun-vie 7am-6pm (medicina familiar)",
  "note": "Lone Star Circle of Care runs the clinic on El Buen's campus. Several providers speak Spanish. El Buen (512) 439-8900 also helps with benefits applications.",
  "note_es": "Lone Star Circle of Care atiende la clínica en el campus de El Buen. Varios proveedores hablan español. El Buen (512) 439-8900 también ayuda con solicitudes de beneficios.",
  "verify": false,
  "pay": [
   "uninsured"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "El Buen Samaritano (South Austin)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: $40 first visit, $30 each visit after Notes: Cannot have any form of insurance."
   ],
   [
    "Location",
    "7000 Woodhue Dr., Austin, TX 78745 Bus: #333"
   ],
   [
    "Contact Information",
    "www.elbuen.org/health/clinic Phone: (512) 439-0701"
   ]
  ],
  "img": "img/clinics/el-buen-samaritano-south-austin.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 0
 },
 {
  "id": "lscc-multiple-locations",
  "name": "Lone Star Circle of Care (Multiple Locations)",
  "org": "Lone Star Circle of Care",
  "area": "Central Texas",
  "address": "1221 W. Ben White Blvd., Bldg B, Austin, TX 78704",
  "lat": 30.2297,
  "lng": -97.781,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/locations/",
  "hours": null,
  "hours_es": null,
  "note": "Many locations. Sliding fee for uninsured patients, and no one is turned away for not being able to pay.",
  "note_es": "Muchas ubicaciones. Tarifa según ingresos para pacientes sin seguro, y no rechazan a nadie por no poder pagar.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "dental",
   "behavioral",
   "pharmacy",
   "vision",
   "specialty"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "Lone Star Circle of Care (Multiple Locations)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Private Insurance, Medicaid, or MAP"
   ],
   [
    "Location",
    "Address: 28 locations in Bell, Bastrop, Travis, and Williamson Counties"
   ],
   [
    "Contact Information",
    "www.lscctx.org Phone: 1-877-800-5722 Email: info@lscctx.org"
   ]
  ],
  "img": "img/clinics/lone-star-circle-of-care-multiple-locations.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 1,
  "insOrder": 0
 },
 {
  "id": "volunteer-healthcare-clinic",
  "name": "Volunteer Healthcare Clinic",
  "org": "independent",
  "area": "Rosedale, Austin",
  "address": "4215 Medical Pkwy, Austin, TX 78756",
  "lat": 30.3075,
  "lng": -97.74,
  "phone": "(512) 459-6002",
  "website": "https://www.volclinic.org/",
  "hours": "Mon-Thu daytime 9:30am-2pm; Tue & Thu evenings 6-10pm",
  "hours_es": "lun-jue de día 9:30am-2pm; mar y jue en la tarde 6-10pm",
  "note": "Free clinic for uninsured Travis County residents at or below 200% of the poverty level. No dental or OB/GYN.",
  "note_es": "Clínica gratis para residentes del condado de Travis sin seguro con ingresos de 200% del nivel de pobreza o menos. No ofrece dentista ni ginecología.",
  "verify": false,
  "pay": [
   "uninsured",
   "free"
  ],
  "services": [
   "primary",
   "pharmacy",
   "specialty",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "Volunteer Healthcare Clinic (Rosedale, Austin)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: $5 donation recommended, but not required. Notes: Must live in Travis County. Cannot have any form of insurance. Clinics held Tuesday and Thursday evenings at 5pm."
   ],
   [
    "Location",
    "Address: 4214 Medical Parkway, Austin, TX 78756\nBus: #3"
   ],
   [
    "Contact Information",
    "www.volclinic.org\nEmail: info@volclinic.org Phone: (512) 459-6002"
   ]
  ],
  "img": "img/clinics/volunteer-healthcare-clinic-rosedale-austin.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 2
 },
 {
  "id": "hope-clinic-austin",
  "name": "Hope Clinic Austin",
  "org": "independent",
  "area": "Georgian Acres",
  "address": "8101 Cameron Rd, #101, Austin, TX 78754",
  "lat": 30.3375,
  "lng": -97.683,
  "phone": "(512) 766-9979",
  "website": "https://www.hopeclinicaustin.org/",
  "hours": "Tue 10am-1:30pm, Wed 6:30-8:30pm, Thu (times vary), 2nd Sat 9:30am-12:30pm",
  "hours_es": "mar 10am-1:30pm, mié 6:30-8:30pm, jue (horario varía), 2do sáb 9:30am-12:30pm",
  "note": "Free clinic for uninsured adults, focused on refugees. Text (512) 768-8609 for an appointment.",
  "note_es": "Clínica gratis para adultos sin seguro, enfocada en refugiados. Mande un texto al (512) 768-8609 para hacer cita.",
  "verify": false,
  "pay": [
   "uninsured",
   "free"
  ],
  "services": [
   "primary",
   "pharmacy"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "Hope Clinic Austin (Georgian Acres)",
  "og": [
   [
    "Payment and Notes",
    "Payment: There is never a charge for the services provided at Hope Clinic. Please consider donating $10/appointment if you are able.\nNotes:***No Walk-In Appointments Available At This Time***New patients are accepted."
   ],
   [
    "Location",
    "Address: 8101 Cameron Rd, #101 Austin,TX 78754"
   ],
   [
    "Contact Information",
    "CALL 512-766-9979 or TEXT 512-768-8609 to make appointment.\nMessages returned within one business day."
   ],
   [
    "Hours",
    "Tuesdays: 10am-1:30pmWednesdays: 6:30-8:30pmOne Saturday each month: 9:30am-12:30pm"
   ]
  ],
  "img": "img/clinics/hope-clinic-austin-georgian-acres.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 3
 },
 {
  "id": "communitycare-arch",
  "name": "Austin Resource Center for the Homeless",
  "org": "CommUnityCare",
  "area": "Downtown Austin",
  "address": "500 E 7th St, Austin, TX 78701",
  "lat": 30.2672,
  "lng": -97.738,
  "phone": "(512) 978-9920",
  "website": "https://communitycaretx.org/locations/name/austin-resource-center-for-the-homeless-arch/",
  "hours": "Mon-Fri 7:30am-4:30pm (closed 11:30am-12:30pm)",
  "hours_es": "lun-vie 7:30am-4:30pm (cerrado 11:30am-12:30pm)",
  "note": "Clinic inside the ARCH shelter, only for people experiencing homelessness. Walk-ins welcome.",
  "note_es": "Clínica dentro del refugio ARCH, solo para personas sin hogar. Puede llegar sin cita.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "behavioral",
   "vision"
  ],
  "spanish": true,
  "walkin": true,
  "ogTitle": "Austin Resource Center for the Homeless (Downtown Austin)",
  "og": [
   [
    "Payment and Notes",
    "Payment: No fees at all\nNotes:For men only Required to be enrolled in case management program to stay overnight - there’s a wait list10:45 am - noon > closed for cleaningNeed service pointcard to enteroffers 24 hours a day, 7 days a weekTo be housed, one must have a valid government-issued driver’s license or Identification Card (ID), birth certificate, and social security card. no longer provide shelter services downtown as of September 30, 2022"
   ],
   [
    "Services Offered",
    "Additional Services:A clinic that provides health care and specialized services to meet basic needs A large commercial kitchen and dinning room where homeless adults that are staying at the shelter can get nightly meals Sleeping areas for homelessBasic shelter services provided on a daily basis:Restrooms Showers Lockers Laundry Internet Access Mail Pickuppeople to rest, day or night, and a Day Resource Center to get out of the elements during the dayNot in program : shower, bathroom, computer, 6am - 5 pm; showers close at 3:30pm"
   ],
   [
    "Location",
    "Address: 500 East Seventh St. Austin, TX 78701\nBus : 4"
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9920\nAppointments: communitycaretx.org"
   ]
  ],
  "img": "img/clinics/austin-resource-center-for-the-homeless-downtown-austin.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 4
 },
 {
  "id": "communitycare-del-valle",
  "name": "CommUnityCare: Del Valle Health Center",
  "org": "CommUnityCare",
  "area": "Del Valle",
  "address": "7050 Elroy Rd, Del Valle, TX 78617",
  "lat": 30.163,
  "lng": -97.645,
  "phone": "(512) 978-9760",
  "website": "https://communitycaretx.org/locations/name/del-valle-health-wellness-center/",
  "hours": "Mon-Fri 7am-6pm",
  "hours_es": "lun-vie 7am-6pm",
  "note": "Full health center with an on-site pharmacy and dental.",
  "note_es": "Centro de salud completo con farmacia y dentista en el lugar.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "dental",
   "behavioral",
   "pharmacy"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "CommUnityCare: Del Valle Health Center (Del Valle)",
  "og": [
   [
    "Payment and Notes",
    "Payment: Fee based on household income; offer discounts on our regular charges based on a person’s income and the number of people in their household. To find out if you qualify for the discount program, call our financial screening staff at 512-978-9015. > no free services Notes: Please call us at 512-978-9015 to schedule an appointment. Most of our appointments are now telehealth visits, so you do not need to leave your home to seek care."
   ],
   [
    "Location and Hours",
    "Address: Del Valle Health Center 3518 FM 973 Del Valle, TX 78617\nBus : 350\nHours: Monday – Tuesday, 7:00 a.m. to 6:00 p.m."
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9760\nWesbite : https://communitycaretx.org"
   ],
   [
    "Services Offered",
    "Family Medicine including childrenWe do not offer lab services at this location"
   ]
  ],
  "img": "img/clinics/communitycare-del-valle-health-center-del-valle.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 5
 },
 {
  "id": "communitycare-east-austin",
  "name": "CommUnityCare: East Austin Health Center",
  "org": "CommUnityCare",
  "area": "East Cesar Chavez",
  "address": "211 Comal St, Austin, TX 78702",
  "lat": 30.2613,
  "lng": -97.728,
  "phone": "(512) 978-9200",
  "website": "https://communitycaretx.org/locations/name/east-austin-health-center/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Focuses on women's health and mental health. Call to schedule.",
  "note_es": "Se enfoca en salud de la mujer y salud mental. Llame para hacer cita.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "womens",
   "behavioral",
   "specialty"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "CommUnityCare: East Austin Health Center (East Cesar Chavez)",
  "og": [
   [
    "Payment and Notes",
    "Payment: Fee based on household income; offer discounts on our regular charges based on a person’s income and the number of people in their household. To find out if you qualify for the discount program, call our financial screening staff at 512-978-9015. > no free services"
   ],
   [
    "Location and Hours",
    "Address: 4214 Medical Parkway, Austin, TX 78756\nBus: #3 Clinic Hours: Monday – Friday, 8 a.m. to 5 p.m.\nLab Hours: Monday – Friday, 8 a.m. to 4:30 p.m; Closed for lunch from 12:30 to 1:30 p.m."
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9200\nWebsite:https://communitycaretx.org/"
   ],
   [
    "Services",
    "PediatricsWomen’s HealthMaternity CareGynecologic Specialty Care by Referral OnlyTelepsychiatry (through video conference)Behavioral Health"
   ]
  ],
  "img": "img/clinics/communitycare-east-austin-health-center-east-cesar-chavez.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 6
 },
 {
  "id": "travis-county-community-center-manor",
  "name": "Travis County Community Center at Manor (Manor)",
  "org": "Travis County Health and Human Services",
  "area": "Manor",
  "address": "600 W Carrie Manor St, Manor, TX 78653",
  "lat": 30.342,
  "lng": -97.56,
  "phone": "(512) 854-1550",
  "website": "https://www.traviscountytx.gov/health-human-services/community-centers",
  "pay": [
   "free"
  ],
  "services": [],
  "spanish": true,
  "walkin": false,
  "verify": true,
  "note": null,
  "note_es": null,
  "hours": null,
  "hours_es": null,
  "ogTitle": "Travis County Community Center at Manor (Manor)",
  "og": [
   [
    "Payment and Notes",
    "Payment: The clinic accepts payment on a sliding scale fee basis. Administrative fees may also apply.\nNotes: Need to apply to access services Requires documents"
   ],
   [
    "Location",
    "Address: 600 W. Carrie Manor St. Manor, TX 78653 Bus: 7, 10, 640"
   ],
   [
    "Contact Information",
    "Phone number: (512) 854-1550\nWebsite:https://www.traviscountytx.gov/health-human-services/individuals-families/manor"
   ],
   [
    "Services",
    "Food programHousing - related assistanceJob search servicesSocial worker servicesSenior congregate meal program"
   ]
  ],
  "img": "img/clinics/travis-county-community-center-at-manor-manor.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 7
 },
 {
  "id": "communitycare-north-central",
  "name": "CommUnityCare: North Central Health Center",
  "org": "CommUnityCare",
  "area": "North Lamar",
  "address": "1210 W Braker Ln, Austin, TX 78758",
  "lat": 30.3846,
  "lng": -97.7055,
  "phone": "(512) 978-9300",
  "website": "https://communitycaretx.org/locations/name/north-central-health-center/",
  "hours": "Mon-Thu 7am-9pm, Fri 7am-6pm, Sat 8am-4:30pm",
  "hours_es": "lun-jue 7am-9pm, vie 7am-6pm, sáb 8am-4:30pm",
  "note": "Open evenings and Saturdays. Dental line: (512) 978-9880.",
  "note_es": "Abierto en las tardes y los sábados. Línea dental: (512) 978-9880.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "dental",
   "behavioral",
   "pharmacy",
   "specialty"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "CommUnityCare: North Central Health Center (North Lamar)",
  "og": [
   [
    "Payment",
    "Payment: Fee based on household income; offer discounts on our regular charges based on a person’s income and the number of people in their household. To find out if you qualify for the discount program, call our financial screening staff at 512-978-9015."
   ],
   [
    "Services",
    "Family MedicineInternal MedicinePediatricsWomen’s HealthMaternity CarePrEP/PEPDental including limited Pediatric DentistryAncillary Services including:PsychiatryBehavioral HealthNutrition,Clinical PharmacistRadiology including X-ray and MammographyTelepsychiatry (through videoconference)"
   ],
   [
    "Location",
    "Address : 1210 W. Braker Lane Austin, TX 78758\nBus: 1"
   ],
   [
    "Contact Information",
    "Phone number : (512) 978-9300\nWebsite: https://communitycaretx.org/locations/north-central-health-center/"
   ]
  ],
  "img": "img/clinics/communitycare-north-central-health-center-north-lamar.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 8
 },
 {
  "id": "communitycare-oak-hill",
  "name": "Oak Hill Health Center",
  "org": "CommUnityCare",
  "area": "Oak Hill",
  "address": "8656-A Hwy 71 W, Suite C, Austin, TX 78735",
  "lat": 30.234,
  "lng": -97.877,
  "phone": "(512) 978-9820",
  "website": "https://communitycaretx.org/locations/name/oak-hill-health-center/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "Oak Hill Health Center (Oak Hill)",
  "og": [
   [
    "Payment and Notes",
    "Fee based on household income; offer discounts on our regular charges based on a person’s income and the number of people in their household. To find out if you qualify for the discount program, call our financial screening staff at 512-978-9015."
   ],
   [
    "Location",
    "Address: 8656-A Hwy. 71 W. Ste. C Austin, TX 78735\nBus: 670"
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9820"
   ],
   [
    "Services",
    "Family Medicine including childrenWomen’s HealthMaternity CarePrEP/PEPAncillary Services including:Tele-psychiatryBehavioral HealthClinical Pharmacist, & Lab"
   ]
  ],
  "img": "img/clinics/oak-hill-health-center-oak-hill.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 9
 },
 {
  "id": "communitycare-south-austin",
  "name": "CommUnityCare: South Austin Health Center",
  "org": "CommUnityCare",
  "area": "Bouldin Creek",
  "address": "2529 S First St, Austin, TX 78704",
  "lat": 30.24,
  "lng": -97.759,
  "phone": "(512) 978-9500",
  "website": "https://communitycaretx.org/locations/name/south-austin-health-center/",
  "hours": "Mon-Fri 7am-5pm",
  "hours_es": "lun-vie 7am-5pm",
  "note": "Also offers HIV care. For HIV services call (512) 978-9100.",
  "note_es": "También ofrece atención para el VIH. Para servicios de VIH llame al (512) 978-9100.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "dental",
   "behavioral",
   "specialty"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "CommUnityCare: South Austin Health Center (Bouldin Creek)",
  "og": [
   [
    "Payment and Notes",
    "Payment: The clinic offers a sliding scale fee based on income. There may also be administrative fees for certain services."
   ],
   [
    "Services",
    "Family Planning, Immunizations, Pregnancy Testing, Sexually Transmitted Infection (STI) Testing and Treatment, Tuberculosis (TB) Testing and Treatment, Women's Health Exams"
   ],
   [
    "Location",
    "Address: South Austin Health Center, 2529 S. First St., Austin, TX 78704\nBus: 10"
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9900"
   ]
  ],
  "img": "img/clinics/communitycare-south-austin-health-center-bouldin-creek.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 10
 },
 {
  "id": "cd-doyle-clinic",
  "name": "CD Doyle Clinic (Downtown Austin)",
  "org": "independent",
  "area": "Downtown Austin",
  "address": null,
  "lat": 30.238,
  "lng": -97.695,
  "phone": null,
  "website": "https://give.utexas.edu/schools/UniversityofTexasatAustin/40-hours-for-the-forty-acres/pages/student-organization/cd-doyle-free-clinic",
  "pay": [
   "uninsured",
   "free"
  ],
  "services": [
   "primary"
  ],
  "spanish": false,
  "walkin": true,
  "verify": true,
  "note": null,
  "note_es": null,
  "hours": null,
  "hours_es": null,
  "ogTitle": "CD Doyle Clinic (Downtown Austin)",
  "og": [
   [
    "Payment and Notes",
    "No insurance needed, no patients are turned away"
   ],
   [
    "Services",
    "Services: Wound Care, Minor Acute Care, Prescriptions, Blood Pressure Checks, Blood Sugar Checks, Medical Advice, Vaccinations (every 3 months), HIV Tests, Pregnancy Tests"
   ],
   [
    "Location",
    "Address: 780 S Hwy 183, Austin TX 78741(Enter Esperanza Community through the first entrance to the right of the road.)\nBus: Bus: #1, #3, #20, #30, #801"
   ],
   [
    "Contact Information",
    "Google Voice Mailbox: (409) 571-9362http://www.cddoyleclinic.com/"
   ]
  ],
  "img": "img/clinics/cd-doyle-clinic-downtown-austin.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 11,
  "insOrder": 16
 },
 {
  "id": "ut-family-wellness",
  "name": "UT Family Wellness Clinic",
  "org": "UT Austin School of Nursing",
  "area": "Hancock",
  "address": "2901 N IH-35, Suite 1.301, Austin, TX 78722",
  "lat": 30.2905,
  "lng": -97.724,
  "phone": "(512) 232-3900",
  "website": "https://nursing.utexas.edu/wellness-centers/family-wellness-center",
  "hours": "Mon 8am-8pm, Tue-Thu 8am-5pm, Fri 8am-12pm (closed 12-1pm)",
  "hours_es": "lun 8am-8pm, mar-jue 8am-5pm, vie 8am-12pm (cerrado 12-1pm)",
  "note": "Nurse practitioner clinic run by the UT School of Nursing. Accepts MAP and self-pay.",
  "note_es": "Clínica de enfermeras practicantes de la Escuela de Enfermería de UT. Acepta MAP y pago propio.",
  "verify": false,
  "pay": [
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "vaccines"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "UT Family Wellness Clinic (Hancock)",
  "og": [
   [
    "Payment and Notes",
    "Non-Insured Office Visits begin at $65\nAccepted Insurances: Ambetter, Sendero, Sendero IdealCare, Seton Health Plan, Amerigroup, Aetna, Blue Cross/Blue Shield, Cigna, Humana, Dell Children's, Humana, PCU, MAP, Medicare, Superior Health, Traditional Medicaid, Tricare, United Health Care, UTSHIP, and Wilco Care Program."
   ],
   [
    "Services",
    "Services: Newborn and Infant Care, Pediatrics, Immunizations, Well Woman Exams, Well Child Exams, Annual Health Physicals, Sports Physicals, Telemedicine, Immunizations, Chronic Disease Management, Sick Visits, Family Planning, Minor Procedures, Sexual Health and Wellness, LGBTQ+ care including PrEP therapy, and Laboratory Services."
   ],
   [
    "Location",
    "Address: 2901 N. I-35 Ste. 1.301 Austin, TX 78722\nBus: #20, #465, #641"
   ],
   [
    "Contact Information",
    "Phone Number: (512)232-3900https://nursing.utexas.edu/wellness-center"
   ]
  ],
  "img": "img/clinics/ut-family-wellness-clinic-hancock.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 12,
  "insOrder": 14
 },
 {
  "id": "ut-childrens-wellness",
  "name": "UT Children's Wellness Clinic",
  "org": "UT Austin School of Nursing",
  "area": "Del Valle",
  "address": "5301 Ross Rd, Building H, Del Valle, TX 78617",
  "lat": 30.1755,
  "lng": -97.638,
  "phone": "(512) 386-3335",
  "website": "https://nursing.utexas.edu/wellness-centers/children-wellness-center",
  "hours": "Mon-Fri 8am-5pm (closed 12-1pm)",
  "hours_es": "lun-vie 8am-5pm (cerrado 12-1pm)",
  "note": "Kids' clinic run by the UT School of Nursing. Self-pay accepted.",
  "note_es": "Clínica para niños de la Escuela de Enfermería de UT. Acepta pago propio.",
  "verify": false,
  "pay": [
   "medicaid",
   "chip",
   "private",
   "map"
  ],
  "services": [
   "pediatrics",
   "primary",
   "vaccines",
   "behavioral"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "UT Children’s Wellness Clinic (Del Valle)",
  "og": [
   [
    "Payment and Notes",
    "Non-Insured Office Visits begin at $65\nAccepted Insurances: Ambetter, Sendero, Sendero IdealCare, Seton Health Plan, Amerigroup, Aetna, Blue Cross/Blue Shield, Cigna, Humana, Dell Children's, Humana, PCU, MAP, Medicare, Superior Health, Traditional Medicaid, Tricare, United Health Care, UTSHIP, and Wilco Care Program."
   ],
   [
    "Services",
    "Services: Newborn and Infant Care, Pediatrics, Immunizations, Well Woman Exams, Well Child Exams, Annual Health Physicals, Sports Physicals, Telemedicine, Immunizations, Chronic Disease Management, Sick Visits, Family Planning, Minor Procedures, Sexual Health and Wellness, LGBTQ+ care including PrEP therapy, and Laboratory Services."
   ],
   [
    "Location",
    "Address: 5301 Ross Rd. #H Del Valle, TX 78617\nBus: #271"
   ],
   [
    "Contact Information",
    "Phone Number: (512)386-3335https://nursing.utexas.edu/wellness-center"
   ]
  ],
  "img": "img/clinics/ut-children-s-wellness-clinic-del-valle.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 13,
  "insOrder": 15
 },
 {
  "id": "lscc-bastrop",
  "name": "LSCC at Bastrop",
  "org": "Lone Star Circle of Care",
  "area": "Bastrop",
  "address": "605 Old Austin Hwy, Bastrop, TX 78602",
  "lat": 30.118,
  "lng": -97.333,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-bastrop/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "primary",
   "pediatrics",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "LSCC at Bastrop (Bastrop)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require photo ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Newborn and Infant Care, Pediatrics, Immunizations, Well Woman Exams, Well Child Exams, Annual Health Physicals, Sports Physicals, Telemedicine, Immunizations, Chronic Disease Management, Sick Visits, Family Planning, Minor Procedures, Sexual Health and Wellness, LGBTQ+ care including PrEP therapy, and Laboratory Services."
   ],
   [
    "Location",
    "Address: 605 Old Austin Hwy. Bastrop, TX 78602 Bus: #217, #350"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-bastrop-bastrop.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 14,
  "insOrder": 13
 },
 {
  "id": "lscc-hutto",
  "name": "LSCC at Hutto",
  "org": "Lone Star Circle of Care",
  "area": "Hutto",
  "address": "123 Ed Schmidt Blvd., Suite 140, Hutto, TX 78634",
  "lat": 30.553,
  "lng": -97.56,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-hutto/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Kids' care and mental health only.",
  "note_es": "Solo atención para niños y salud mental.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "pediatrics",
   "behavioral"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "LSCC at Hutto (Hutto)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require photo ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Pediatrics, Behavioral Health, Virtual Visits"
   ],
   [
    "Location and Hours",
    "Address: 123 Ed Schmidt Blvd. Ste. 140 Hutto, TX 78634\nHours: Monday to Friday, 8:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-hutto-hutto.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 15,
  "insOrder": 12
 },
 {
  "id": "lscc-whitestone",
  "name": "LSCC at Whitestone (Whitestone)",
  "org": "Lone Star Circle of Care",
  "area": "Whitestone",
  "address": null,
  "lat": 30.5052,
  "lng": -97.8203,
  "phone": null,
  "website": "https://lonestarcares.org/locations/",
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "pediatrics"
  ],
  "spanish": false,
  "walkin": false,
  "verify": true,
  "note": null,
  "note_es": null,
  "hours": null,
  "hours_es": null,
  "ogTitle": "LSCC at Whitestone (Whitestone)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Pediatrics, Virtual Visits"
   ],
   [
    "Location and Hours",
    "Address: 1730 E. Whitestone Blvd. Ste. 101 Cedar Park, TX 78613\nHours: Monday to Friday, 8:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-whitestone-whitestone.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 16,
  "insOrder": 10
 },
 {
  "id": "lscc-round-rock-behavioral",
  "name": "LSCC at Round Rock Health—Behavioral Health",
  "org": "Lone Star Circle of Care",
  "area": "Round Rock",
  "address": "2120 N. Mays St., Suite 430, Round Rock, TX 78665",
  "lat": 30.5385,
  "lng": -97.6895,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-round-rock-health-clinic-behavioral-health/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Counseling and psychiatry.",
  "note_es": "Consejería y psiquiatría.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "LSCC at Round Rock (Round Rock)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Behavioral Health, Virtual Visits"
   ],
   [
    "Location and Hours",
    "Address: 2120 N. Mays St. Ste. 430 Round Rock, TX 78665\nHours:Monday & Tuesday: 8:00am-7:00pmWednesday to Friday: 8:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-round-rock-round-rock.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 17,
  "insOrder": 11,
  "insTitle": "LSCC at Round Rock Health—Behavioral Health (Round Rock)"
 },
 {
  "id": "lscc-stassney",
  "name": "LSCC at Stassney",
  "org": "Lone Star Circle of Care",
  "area": "Greater South River City/SoCo",
  "address": "730 W. Stassney, Suite 110, Austin, TX 78745",
  "lat": 30.201,
  "lng": -97.786,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-stassney/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Kids' doctor and dental clinic. Some dental staff speak Spanish.",
  "note_es": "Doctor para niños y clínica dental. Parte del personal dental habla español.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "pediatrics",
   "dental"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "LSCC at Stassney (Greater South River City/SoCo)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Pediatrics, Dental, Virtual Visits"
   ],
   [
    "Location and Hours",
    "Address: 730 W. Stassney Lane Ste. 110 Austin, TX 78745\nBus: #1, #10, #311\nHours: Monday to Friday, 8:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-stassney-greater-south-river-city-soco.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 18,
  "insOrder": 9
 },
 {
  "id": "lscc-lake-aire-georgetown",
  "name": "LSCC Family Medicine at Lake Aire Medical Center",
  "org": "Lone Star Circle of Care",
  "area": "Georgetown",
  "address": "2423 Williams Dr., Suite 105, Georgetown, TX 78628",
  "lat": 30.661,
  "lng": -97.701,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-lake-aire-medical-center-family-medicine/",
  "hours": "Mon-Thu 8am-7pm, Fri 8am-5pm",
  "hours_es": "lun-jue 8am-7pm, vie 8am-5pm",
  "note": "Same building has kids' care, mental health, vision and a pharmacy.",
  "note_es": "El mismo edificio tiene atención para niños, salud mental, visión y farmacia.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "primary",
   "pharmacy"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "LSCC Family Medicine at Lake Aire Medical Center (Georgetown)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Family Medicine, Pharmacy, Virtual Visits"
   ],
   [
    "Location",
    "Address: 2423 Williams Drive Ste. 105 Georgetown, TX 78628"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-family-medicine-at-lake-aire-medical-center-georgetown.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 19,
  "insOrder": 8
 },
 {
  "id": "lscc-texas-am-round-rock",
  "name": "LSCC at Texas A&M Health Sciences Center",
  "org": "Lone Star Circle of Care",
  "area": "Round Rock",
  "address": "3950 N. A.W. Grimes Blvd., Suite N301A, Round Rock, TX 78665",
  "lat": 30.5655,
  "lng": -97.656,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-texas-am-health-science-center-family-medicine/",
  "hours": "Mon-Fri 8am-5pm, Sat 9am-1pm (family medicine)",
  "hours_es": "lun-vie 8am-5pm, sáb 9am-1pm (medicina familiar)",
  "note": "Large campus with family medicine, kids, women's health, mental health and a pharmacy.",
  "note_es": "Campus grande con medicina familiar, niños, salud de la mujer, salud mental y farmacia.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "behavioral",
   "pharmacy",
   "specialty"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "LSCC at A&M Health Sciences Center (Round Rock)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Pharmacy, Senior Care, Virtual Visits"
   ],
   [
    "Location",
    "Address: 3950 N. A.W. Grimes Blvd. Ste. 301A Round Rock, TX 78665\nBus: #50"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-a-m-health-sciences-center-round-rock.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 20,
  "insOrder": 7,
  "insTitle": "LSCC at Texas A&M Health Sciences Center (Round Rock)"
 },
 {
  "id": "lscc-jonestown",
  "name": "LSCC at Jonestown",
  "org": "Lone Star Circle of Care",
  "area": "Jonestown",
  "address": "18220 FM 1431, Suite D, Jonestown, TX 78641",
  "lat": 30.493,
  "lng": -97.923,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-jonestown/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Family medicine. Call to ask about same-day visits.",
  "note_es": "Medicina familiar. Llame para preguntar por citas el mismo día.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "LSCC at Jonestown (Jonestown)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Family Medicine, Convenient Care"
   ],
   [
    "Location and Hours",
    "18220 FM 1431 Ste. D Jonestown, TX 78645\nBus: #214\nHours: Monday to Friday, 7:00am-8:00am"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-jonestown-jonestown.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 21
 },
 {
  "id": "lscc-collinfield",
  "name": "LSCC at Collinfield",
  "org": "Lone Star Circle of Care",
  "area": "Collinfield",
  "address": "8913 Collinfield Drive, Units 1-2, Austin, TX 78758",
  "lat": 30.364,
  "lng": -97.712,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-care-collinfield/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Several Spanish-speaking providers.",
  "note_es": "Varios proveedores hablan español.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "LSCC at Collinfield (Collinfield)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Behavioral Health, Family Medicine, Pediatrics, Virtual Visits"
   ],
   [
    "Location and Hours",
    "8913 Collinfield Drive Unit 1 Austin, TX 78758 Bus: #801\nHours: Monday to Friday, 8:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-collinfield-collinfield.webp",
  "insuredList": false,
  "uninsuredList": true,
  "order": 22
 },
 {
  "id": "ben-white-lscc",
  "name": "Ben White Health Clinic",
  "org": "Lone Star Circle of Care",
  "area": "Galindo",
  "address": "1221 W Ben White Blvd, Building B, Suites 100 & 200, Austin, TX 78704",
  "lat": 30.2275,
  "lng": -97.7845,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/ben-white-health-clinic-family-medicine/",
  "hours": "Mon-Thu 8am-7pm, Fri 8am-5pm",
  "hours_es": "lun-jue 8am-7pm, vie 8am-5pm",
  "note": "Lone Star Circle of Care clinic with income-based fees.",
  "note_es": "Clínica de Lone Star Circle of Care con tarifas según sus ingresos.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "medicare",
   "private"
  ],
  "services": [
   "primary",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "Ben White Health Clinic (Galindo)",
  "og": [
   [
    "Payment and Notes",
    "The clinic accepts private insurance, Medicaid, Medicare, and self-payment. Sliding scale fees may be available for those who qualify."
   ],
   [
    "Services",
    "primary careimmunizationslab work family planningwomen's healthSTD testing and treatment."
   ],
   [
    "Location",
    "Address: 1221 W. Ben White Blvd. Ste. 200B Austin, TX 78704\nBus number: #1, #10, and #333."
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9901\nWebsite: https://www.austintexas.gov/department/ben-white-health-clinic"
   ]
  ],
  "img": "img/clinics/ben-white-health-clinic-galindo.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 23,
  "insOrder": 5
 },
 {
  "id": "lscc-el-buen-samaritano-lscc-at-el-buen-sama",
  "name": "El Buen Samaritano (LSCC)",
  "org": "Lone Star Circle of Care",
  "area": "Westgate / South Austin",
  "address": "7000 Woodhue Dr., Building B, Austin, TX 78745",
  "lat": 30.2085,
  "lng": -97.8205,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-at-el-buen-samaritano/",
  "hours": "Mon-Fri 7am-6pm (family medicine)",
  "hours_es": "lun-vie 7am-6pm (medicina familiar)",
  "note": "Lone Star Circle of Care runs the clinic on El Buen's campus. Several providers speak Spanish. El Buen (512) 439-8900 also helps with benefits applications.",
  "note_es": "Lone Star Circle of Care atiende la clínica en el campus de El Buen. Varios proveedores hablan español. El Buen (512) 439-8900 también ayuda con solicitudes de beneficios.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "LSCC at El Buen Samaritano (Westgate)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Family Medicine, Women’s Health Services, Pediatrics"
   ],
   [
    "Location and Hours",
    "7000 Woodhue Drive Bldg. B Austin, TX 78745\nBus: #333\nHours: Family Health and Women’s Health Services: Monday to Friday, 7:00am-6:00pmPediatrics: 7:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-el-buen-samaritano-westgate.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 24,
  "insOrder": 6
 },
 {
  "id": "william-cannon",
  "name": "William Cannon Health Center",
  "org": "CommUnityCare",
  "area": "Franklin Park",
  "address": "6801 S I-35, Suite 1-E, Austin, TX 78744",
  "lat": 30.1905,
  "lng": -97.771,
  "phone": "(512) 978-8750",
  "website": "https://communitycaretx.org/locations/name/william-cannon-health-center-now-primary-care/",
  "hours": "Mon-Fri 7am-6pm",
  "hours_es": "lun-vie 7am-6pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "womens",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "William Cannon Health Center (Franklin Park)",
  "og": [
   [
    "Payment and Notes",
    "They accept Medicaid, Medicare, and private insurance. Offer a sliding fee scale based on income for patients without insurance.\nNotes: It is recommended that patients arrive 15 minutes before their appointment time, bring their insurance card and a photo ID, and bring a list of their current medications."
   ],
   [
    "Services",
    "Primary care, women's health, behavioral health, dental care, and pharmacy services."
   ],
   [
    "Location",
    "Address: 6801 S. I-35 #1-E Austin, TX 7874\nBus number/route: 1L, 1M, 801."
   ],
   [
    "Contact Information",
    "Phone number: (512) 978-9400\nWebsite: https://www.austintexas.gov/department/william-cannon-health-center"
   ]
  ],
  "img": "img/clinics/william-cannon-health-center-franklin-park.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 25,
  "insOrder": 4
 },
 {
  "id": "southeast-health-wellness",
  "name": "Southeast Health and Wellness Center",
  "org": "CommUnityCare",
  "area": "Montopolis",
  "address": "2901 Montopolis Dr, Austin, TX 78741",
  "lat": 30.2195,
  "lng": -97.702,
  "phone": "(512) 978-9901",
  "website": "https://communitycaretx.org/locations/name/southeast-health-and-wellness-center-walk-in-clinic/",
  "hours": "Walk-in Convenient Care Mon-Sat 7am-8pm; primary care Mon-Fri 7am-5pm",
  "hours_es": "Sin cita lun-sáb 7am-8pm; atención primaria lun-vie 7am-5pm",
  "note": "Walk-in clinic open six days a week.",
  "note_es": "Clínica sin cita abierta seis días a la semana.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "dental",
   "behavioral",
   "pharmacy",
   "specialty"
  ],
  "spanish": true,
  "walkin": true,
  "ogTitle": "Southeast Health and Wellness Center (Montopolis)",
  "og": [
   [
    "Payment and Notes",
    "The center accepts most insurance plans, including Medicare, and Medicaid. They also offer a sliding fee scale based on income and family size for those without insurance."
   ],
   [
    "Services",
    "The center offers a variety of services, including primary care, dental care, behavioral health services, and more. They also have a pharmacy on site."
   ],
   [
    "Location",
    "Address: 2901 Montopolis Drive Austin, TX 78741\nBus: 7, 350, and 711."
   ],
   [
    "Contact Information",
    "Phone : (512) 978-9900\nWebsite: https://www.austintexas.gov/department/southeast-health-and-wellness-center"
   ]
  ],
  "img": "img/clinics/southeast-health-and-wellness-center-montopolis.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 26,
  "insOrder": 3
 },
 {
  "id": "sandra-joy-anderson",
  "name": "Sandra Joy Anderson Community Health and Wellness Center",
  "org": "CommUnityCare",
  "area": "East Cesar Chavez",
  "address": "1705 E 11th St, Austin, TX 78702",
  "lat": 30.2697,
  "lng": -97.7247,
  "phone": "(512) 978-8400",
  "website": "https://communitycaretx.org/locations/name/sandra-joy-anderson-community-health-wellness-center/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Family medicine, women's health, PrEP/PEP and nutrition.",
  "note_es": "Medicina familiar, salud de la mujer, PrEP/PEP y nutrición.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "womens",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "Sandra Joy Anderson Community Health and Wellness Center  (East Cesar Chavez)",
  "og": [
   [
    "Payment and Notes",
    "The center accepts most insurance plans, Medicaid, and Medicare. They offer a sliding fee scale for patients who are uninsured or underinsured. Payment assistance may be available to eligible patients."
   ],
   [
    "Services",
    "Services offered:Primary care, Preventive care, Chronic disease management, Behavioral health services, Pharmacy services, Laboratory services"
   ],
   [
    "Location",
    "Address: 1705 E. 11th St. Austin, TX 78702\nBus: #4, 18, and 300"
   ],
   [
    "Contact Information",
    "Phone : (512) 978-9900\nWebsite: https://www.austintexas.gov/department/sandra-joy-anderson-community-health-and-wellness-center"
   ]
  ],
  "img": "img/clinics/sandra-joy-anderson-community-health-and-wellness-center-eas.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 27,
  "insOrder": 2,
  "insTitle": "Sandra Joy Anderson Community Health and Wellness Center (East Cesar Chavez)"
 },
 {
  "id": "seton-community-health-centers",
  "name": "Seton Community Health Centers (Multiple Locations)",
  "org": "Ascension Seton",
  "area": "Multiple Locations",
  "address": "2811 E 2nd St, Austin, TX 78702",
  "lat": 30.2555,
  "lng": -97.712,
  "phone": "(512) 324-4930",
  "website": "https://healthcare.ascension.org/locations/texas/txaus/austin-ascension-medical-group-seton-primary-care-mccarthy",
  "pay": [
   "medicaid",
   "medicare",
   "private"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "vaccines"
  ],
  "spanish": false,
  "walkin": false,
  "verify": true,
  "note": null,
  "note_es": null,
  "hours": null,
  "hours_es": null,
  "ogTitle": "Seton Community Health Centers (Multiple Locations)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, or CHIP"
   ],
   [
    "Location",
    "Address: 8913 Collinfield Dr, Austin, TX 78758 Bus: #240 Parkfield"
   ],
   [
    "Contact Information",
    "Phone: (512) 324-6850 www.seton.net/locations/clinics"
   ],
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, or CHIP"
   ],
   [
    "Location",
    "Address: 2811 East 2nd Street, Austin, TX 78702 Bus: #17"
   ],
   [
    "Contact Information",
    "Phone: (512) 324-4930 www.seton.net/locations/clinics"
   ],
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, or CHIP"
   ],
   [
    "Location",
    "Address: 3706 S 1st St, Austin, TX 78704 Bus: #10 and #328 Topfer"
   ],
   [
    "Contact Information",
    "Phone: (512) 324-4940 www.seton.net/locations/clinics"
   ]
  ],
  "img": "img/clinics/seton-community-health-centers-multiple-locations.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 28,
  "insOrder": 1
 },
 {
  "id": "rundberg",
  "name": "Rundberg Health Center",
  "org": "CommUnityCare",
  "area": "North Lamar",
  "address": "825 E Rundberg Ln, Suite B-1, Austin, TX 78753",
  "lat": 30.3585,
  "lng": -97.693,
  "phone": "(512) 978-9600",
  "website": "https://communitycaretx.org/locations/name/rundberg-health-center/",
  "hours": "Mon-Fri 7am-5pm",
  "hours_es": "lun-vie 7am-5pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "behavioral"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "Rundberg Health Center (North Lamar)",
  "og": [
   [
    "Payment and Notes",
    "The center accepts most insurance plans, including Medicaid and Medicare. If you don't have insurance, they offer a sliding fee scale based on your income and family size. You can also pay with cash or credit card."
   ],
   [
    "Services",
    "Family Medicine, Virtual Visits, primary care services, including preventive care, sick visits, and chronic disease management. They also offer dental care, behavioral health services, and case management."
   ],
   [
    "Location and Hours",
    "Address: Address: 825 E. Rundberg Lane Ste. B1 Austin, TX 78753\nBus: #10\nHours: Monday to Friday from 8:00 am to 5:00 pm."
   ],
   [
    "Contact Information",
    "Phone : (512) 978-9800https://www.austintexas.gov/department/rundberg-health-center"
   ]
  ],
  "img": "img/clinics/rundberg-health-center-north-lamar.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 29,
  "insOrder": 19
 },
 {
  "id": "lscc-northwest-austin",
  "name": "LSCC at Northwest Austin",
  "org": "Lone Star Circle of Care",
  "area": "North Burnet",
  "address": "11111 Research Blvd., Suite 320, Austin, TX 78759",
  "lat": 30.4,
  "lng": -97.747,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/location/lone-star-circle-of-care-family-medicine/",
  "hours": "Mon-Fri 8am-5pm",
  "hours_es": "lun-vie 8am-5pm",
  "note": "Family medicine, kids' care and mental health in one building.",
  "note_es": "Medicina familiar, atención para niños y salud mental en un solo edificio.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "behavioral"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "LSCC at Northwest Austin (North Burnet)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances are accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Family Medicine, Virtual Visits"
   ],
   [
    "Location and Hours",
    "Address: 11111 Research Blvd. Ste. 320 Austin, TX 78759\nBus: #3, #383\nHours: Hours: Monday to Friday, 8:00am-5:00pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-at-northwest-austin-north-burnet.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 30,
  "insOrder": 18
 },
 {
  "id": "lscc-marble-falls",
  "name": "LSCC Family Care Center at Marble Falls",
  "org": "Lone Star Circle of Care",
  "area": "Marble Falls",
  "address": "802 Avenue J, Marble Falls, TX 78654",
  "lat": 30.577,
  "lng": -98.278,
  "phone": "(877) 800-5722",
  "website": "https://lonestarcares.org/locations/",
  "hours": null,
  "hours_es": null,
  "note": "Call to confirm this location is still open.",
  "note_es": "Llame para confirmar que esta ubicación sigue abierta.",
  "verify": true,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private"
  ],
  "services": [
   "primary"
  ],
  "spanish": false,
  "walkin": false,
  "ogTitle": "LSCC Family Care Center at Marble Falls (Marble Falls)",
  "og": [
   [
    "Payment and Notes",
    "Sliding Fee based on Federal Poverty Level (FPL) for uninsured patients. Require ID, proof of address, and proof of income (banking accounts, mortgage, letter of support, etc.). No patients are turned away. Most insurances are accepted, including Medicaid and CHIP."
   ],
   [
    "Services",
    "Services: Family Medicine, Pediatrics, Behavioral Health, Dental, Virtual Visits"
   ],
   [
    "Location and Hours",
    "Address: 802 Ave. J Marble Falls, TX 78654 Hours: Monday to Friday, 8:00 am-5:00 pm"
   ],
   [
    "Contact Information",
    "(877)800-5722https://lonestarcares.org/"
   ]
  ],
  "img": "img/clinics/lscc-family-care-center-at-marble-falls-marble-falls.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 31,
  "insOrder": 17
 },
 {
  "id": "pcc-main-st-johns",
  "name": "People's Community Clinic",
  "org": "People's Community Clinic",
  "area": "St. Johns",
  "address": "1101 Camino La Costa, Austin, TX 78752",
  "lat": 30.327,
  "lng": -97.705,
  "phone": "(512) 478-4939",
  "website": "https://www.austinpcc.org/contact-us/main-clinic-hours-and-locations-1/",
  "hours": "Mon-Fri 8am-5pm (Mon, Tue, Thu until 8pm)",
  "hours_es": "lun-vie 8am-5pm (lun, mar, jue hasta 8pm)",
  "note": "Sliding fee by income. Appointments preferred, walk-ins seen when possible.",
  "note_es": "Tarifa según ingresos. Es mejor hacer cita, pero atienden sin cita cuando pueden.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "dental",
   "behavioral",
   "pharmacy",
   "vaccines"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "People’s Community Clinic (St. Johns)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, Ambetter, Ideal Care, BlueCross BlueShield of Texas, or CHIP"
   ],
   [
    "Services",
    "General Medicine (Pediatrics, Adolescent, Adult)Behavioral HealthHealth EducationOral HealthIPMP (Integrative Pain Management Program)ImmunizationsLaboratory ServicesPharmacy Services"
   ],
   [
    "Location and Hours",
    "Address: 1101 Camino La Costa, Austin, TX 78752\nHours: Monday, Tuesday, Thursday, Friday—8:00am-5:00pmWednesday—8:00 am to 12:15 pm, 1:00 pm to 5:00 pm\nAfter Hours: Monday, Tuesday, Thursday—5:00pm-8:00pmFor after-hours assistance, please call 512.478.4939 and select the option to speak with a nurse."
   ],
   [
    "Contact Information",
    "www.austinpcc.org\nPhone: (512) 478-4939"
   ]
  ],
  "img": "img/clinics/people-s-community-clinic-st-johns.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 32,
  "insOrder": 21,
  "insTitle": "People’s Community Clinic (St. Johns, Austin)"
 },
 {
  "id": "pcc-center-for-womens-health",
  "name": "PCC—Center for Women's Health",
  "org": "People's Community Clinic",
  "area": "Cherrywood",
  "address": "1025 East 32nd Street, Suite 200, Austin, TX 78705",
  "lat": 30.293,
  "lng": -97.724,
  "phone": "(512) 478-4939",
  "website": "https://www.austinpcc.org/contact-us/main-clinic-hours-and-locations-1/",
  "hours": "Mon-Fri 8am-5pm (Mon, Wed, Thu until 8pm)",
  "hours_es": "lun-vie 8am-5pm (lun, mié, jue hasta 8pm)",
  "note": "Moved in 2025 to the St. David's Medical Center Pavilion. Gynecology, prenatal care and family planning.",
  "note_es": "Se mudó en 2025 al St. David's Medical Center Pavilion. Ginecología, cuidado prenatal y planificación familiar.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "womens",
   "behavioral",
   "pharmacy",
   "vaccines"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "PCC—Center for Women's Health (Cherrywood)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, Ambetter, Ideal Care, BlueCross BlueShield of Texas, or CHIP"
   ],
   [
    "Services",
    "GynecologyPrenatal CareFamily PlanningBehavioral HealthImmunizationsHealth EducationLaboratory ServicesPharmacy Services"
   ],
   [
    "Location and Hours",
    "Address: 2909 N Interstate Highway 35, Austin, TX 78722 Bus: #37\nHours: Monday-Friday—8:00 am to 5:00 pm\nAfter Hours: Monday, Wednesday, Thursday—5:00pm to 8:00pmFor after-hours assistance, please call 512.478.4939 and select the option to speak with a nurse."
   ],
   [
    "Contact Information",
    "www.austinpcc.org\nPhone: (512) 478-4939"
   ]
  ],
  "img": "img/clinics/pcc-center-for-women-s-health-cherrywood.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 33,
  "insOrder": 20,
  "insTitle": "PCC—Center For Women's Health (Cherrywood)"
 },
 {
  "id": "pcc-manor-mustang",
  "name": "PCC—Manor Mustang Health Clinic",
  "org": "People's Community Clinic",
  "area": "Manor",
  "address": "10323 US-290 East, Building 35, Manor, TX 78653",
  "lat": 30.344,
  "lng": -97.565,
  "phone": "(512) 478-4939",
  "website": "https://www.austinpcc.org/our-programs/other/manor-isd-clinic/",
  "hours": "Mon & Wed 8am-4pm, Fri 8am-12pm",
  "hours_es": "lun y mié 8am-4pm, vie 8am-12pm",
  "note": "School clinic for Manor ISD students and their younger siblings.",
  "note_es": "Clínica escolar para estudiantes de Manor ISD y sus hermanos menores.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "pediatrics",
   "womens",
   "behavioral",
   "pharmacy",
   "vaccines"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "PCC—Manor Mustang Health Clinic (Manor)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, Ambetter, Ideal Care, BlueCross BlueShield of Texas, or CHIP"
   ],
   [
    "Services",
    "General MedicineFamily PlanningImmunizationsBehavioral HealthHealth EducationLaboratory ServicesPharmacy Services"
   ],
   [
    "Location and Hours",
    "Address: 10323 US-290 East, Building 35, Manor, TX 78653\nHours: Mondays, Tuesdays—8:15am to 4:30pmWednesdays, Fridays—8:15am to 12:00pmThursdays—12:45pm to 4:30pm"
   ],
   [
    "Contact Information",
    "Phone: (512) 478-4939 www.austinpcc.org"
   ]
  ],
  "img": "img/clinics/pcc-manor-mustang-health-clinic-manor.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 34,
  "insOrder": 22
 },
 {
  "id": "communitycare-care-connections",
  "name": "CommUnity Care: CareConnection Clinic",
  "org": "CommUnityCare",
  "area": "Galindo, Austin",
  "address": "3706 S First St, Austin, TX 78704",
  "lat": 30.2285,
  "lng": -97.766,
  "phone": "(512) 978-8080",
  "website": "https://communitycaretx.org/locations/name/care-connections-clinic/",
  "hours": "Mon-Fri 7:30am-4:30pm",
  "hours_es": "lun-vie 7:30am-4:30pm",
  "note": "For people experiencing homelessness (no referral needed). Call to schedule.",
  "note_es": "Para personas sin hogar (no necesita referencia). Llame para hacer cita.",
  "verify": false,
  "pay": [
   "uninsured",
   "sliding",
   "medicaid",
   "chip",
   "medicare",
   "private",
   "map"
  ],
  "services": [
   "primary",
   "behavioral",
   "specialty"
  ],
  "spanish": true,
  "walkin": false,
  "ogTitle": "CommUnity Care: CareConnection Clinic (Galindo, Austin)",
  "og": [
   [
    "Payment and Notes",
    "Payment Accepted: Sliding Fee Scale, Medicare, Medicaid, or CHIP"
   ],
   [
    "Location",
    "Address: 3706 S 1st St, Austin, TX 78704 Bus: #10 and #328 Topfer"
   ],
   [
    "Contact Information",
    "Phone: (512) 324-4940 www.seton.net/locations/clinics"
   ]
  ],
  "img": "img/clinics/community-care-careconnection-clinic-galindo-austin.webp",
  "insuredList": true,
  "uninsuredList": true,
  "order": 35,
  "insOrder": 23,
  "insTitle": "CommUnity Care: Care Connection Clinic (Galindo, Austin)"
 }
];
window.HM_FOOD = [
 {
  "id": "micah-6-food-pantry",
  "name": "Micah 6 Food Pantry (University Presbyterian Church)",
  "org": null,
  "area": "West Campus",
  "address": "2203 San Antonio St, Austin, TX 78705",
  "lat": 30.285165,
  "lng": -97.742825,
  "phone": "512-476-5321 ext. 113",
  "website": "https://www.micah6austin.org/",
  "hours": "Thu 5:30–7pm; Sat 9:30–11:10am",
  "hours_es": "jue 5:30–7pm; sáb 9:30–11:10am",
  "note": "A few blocks west of UT campus.",
  "note_es": "A pocas cuadras al oeste del campus de UT.",
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "trinity-center",
  "name": "Trinity Center",
  "org": null,
  "area": "Downtown",
  "address": "304 E 7th St, Austin, TX 78701",
  "lat": 30.268497,
  "lng": -97.739476,
  "phone": "512-610-3500",
  "website": "https://trinitycenteraustin.org/",
  "hours": "Mon–Fri boxed breakfast 9am; Sun meal 3pm",
  "hours_es": "lun–vie desayuno 9am; dom comida 3pm",
  "note": "Breakfast for the first 80 people. Also showers, clothing, and help getting IDs.",
  "note_es": "Desayuno para las primeras 80 personas. También regaderas, ropa y ayuda para sacar identificación.",
  "verify": false,
  "type": [
   "hot-meals",
   "hygiene"
  ],
  "spanish": false
 },
 {
  "id": "hope-food-pantry",
  "name": "Hope Food Pantry Austin",
  "org": null,
  "area": "North Loop / Hyde Park",
  "address": "4001 Speedway, Austin, TX 78751",
  "lat": 30.303221,
  "lng": -97.731315,
  "phone": "512-420-0710",
  "website": "https://www.centraltexasfoodbank.org/location/hope-food-pantry",
  "hours": "Thu & Fri 9–10:30am; 1st Sat 9–10:30am",
  "hours_es": "jue y vie 9–10:30am; 1er sáb 9–10:30am",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "hyde-park-baptist-pantry",
  "name": "Hyde Park Baptist Church Food Pantry",
  "org": null,
  "area": "Hyde Park",
  "address": "3810 Speedway, Austin, TX 78751",
  "lat": 30.301409,
  "lng": -97.733087,
  "phone": "512-459-6587",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "Wed 1–3pm",
  "hours_es": "mié 1–3pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "ut-outpost",
  "name": "UT Outpost (UT Austin student pantry)",
  "org": null,
  "area": "UT Campus",
  "address": "Student Services Building, Room G1.406, 100 W Dean Keeton St, Austin, TX 78712",
  "lat": 30.289622,
  "lng": -97.738053,
  "phone": "512-471-6242",
  "website": "https://deanofstudents.utexas.edu/sos/ut-outpost.php",
  "hours": "Tue–Thu 1–6pm; Fri 1–5pm; 1st & 3rd Sat 10am–2pm",
  "hours_es": "mar–jue 1–6pm; vie 1–5pm; 1er y 3er sáb 10am–2pm",
  "note": "Only for current UT Austin students. Food, toiletries and a career closet.",
  "note_es": "Solo para estudiantes actuales de UT Austin. Comida, artículos de higiene y ropa para entrevistas.",
  "verify": false,
  "type": [
   "pantry",
   "hygiene",
   "snap-help"
  ],
  "spanish": false
 },
 {
  "id": "manos-de-cristo",
  "name": "Manos de Cristo",
  "org": null,
  "area": "North Central (Hyde Park east)",
  "address": "4911 Harmon Ave, Austin, TX 78751",
  "lat": 30.308855,
  "lng": -97.712894,
  "phone": "512-477-7454",
  "website": "https://manosdecristo.org/need-our-help/basic-needs/",
  "hours": "Mon–Fri 8–11am",
  "hours_es": "lun–vie 8–11am",
  "note": "Curbside, first come first served. No income or ZIP limits.",
  "note_es": "En la acera, por orden de llegada. Sin límites de ingresos ni código postal.",
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "st-louis-food-pantry",
  "name": "St. Louis Catholic Church Food Pantry",
  "org": null,
  "area": "North Austin (Crestview/Wooten)",
  "address": "2114 St Joseph Blvd, Austin, TX 78757",
  "lat": 30.351437,
  "lng": -97.731412,
  "phone": "512-454-0384",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "Sat 8:30–10am",
  "hours_es": "sáb 8:30–10am",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "icna-namcc-food-pantry",
  "name": "ICNA-NAMCC Food Pantry",
  "org": null,
  "area": "North Austin (North Lamar)",
  "address": "11900 N Lamar Blvd, Austin, TX 78753",
  "lat": 30.3899,
  "lng": -97.6839,
  "phone": "512-300-9709",
  "website": "https://centraltexasfoodbank.org/location/icna-namcc-food-pantry",
  "hours": "Sat 8:30–10:30am",
  "hours_es": "sáb 8:30–10:30am",
  "note": "Delivers groceries in Travis County: text your name and address to 512-931-4090. Call to confirm the day.",
  "note_es": "Entrega comida en el condado de Travis: mande su nombre y dirección por texto al 512-931-4090. Llame para confirmar el día.",
  "verify": false,
  "type": [
   "pantry",
   "groceries-delivery"
  ],
  "spanish": false
 },
 {
  "id": "our-lady-of-guadalupe-pantry",
  "name": "Our Lady of Guadalupe Church Food Pantry",
  "org": null,
  "area": "East Austin",
  "address": "1206 E 9th St, Austin, TX 78702",
  "lat": 30.266852,
  "lng": -97.72825,
  "phone": "512-478-7955",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "1st, 2nd, 4th & 5th Fri 10:30am–1pm; 3rd Sat 9am–1pm",
  "hours_es": "1er, 2do, 4to y 5to vie 10:30am–1pm; 3er sáb 9am–1pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "cristo-rey-food-pantry",
  "name": "Cristo Rey Catholic Church Social Ministry Food Pantry",
  "org": null,
  "area": "East Austin (Holly)",
  "address": "2208 E 2nd St, Austin, TX 78702",
  "lat": 30.256642,
  "lng": -97.720089,
  "phone": "512-477-1099",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "Thu 12:15–2:15pm",
  "hours_es": "jue 12:15–2:15pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "foundation-communities-m-station",
  "name": "Foundation Communities – M Station Food Pantry",
  "org": null,
  "area": "East Austin (Chestnut)",
  "address": "2918 E Martin Luther King Jr Blvd, Austin, TX 78702",
  "lat": 30.282027,
  "lng": -97.707663,
  "phone": "512-617-3037",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "2nd & 4th Fri 11am–1pm",
  "hours_es": "2do y 4to vie 11am–1pm",
  "note": "Pantry at a Foundation Communities apartment community. Call to ask if non-residents can come.",
  "note_es": "Despensa en un complejo de Foundation Communities. Llame para preguntar si pueden ir personas que no viven ahí.",
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "angel-house-austin-baptist-chapel",
  "name": "Angel House Soup Kitchen (Austin Baptist Chapel)",
  "org": null,
  "area": "Downtown / Rainey-East Cesar Chavez",
  "address": "908 E Cesar Chavez St, Austin, TX 78702",
  "lat": 30.260917,
  "lng": -97.735385,
  "phone": "512-474-2666",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "Daily 9:30am–12:30pm",
  "hours_es": "Todos los días 9:30am–12:30pm",
  "note": "Free lunch every day.",
  "note_es": "Almuerzo gratis todos los días.",
  "verify": false,
  "type": [
   "hot-meals"
  ],
  "spanish": false
 },
 {
  "id": "st-ignatius-martyr-pantry",
  "name": "St. Ignatius Martyr Catholic Church Food Pantry",
  "org": null,
  "area": "South Austin (Travis Heights)",
  "address": "2303 Euclid Ave, Austin, TX 78704",
  "lat": 30.240799,
  "lng": -97.755167,
  "phone": "512-442-0226",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "Mon–Wed 9am–1pm; Thu 9–11am",
  "hours_es": "lun–mié 9am–1pm; jue 9–11am",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "faith-food-pantry",
  "name": "Faith Food Pantry",
  "org": null,
  "area": "South Austin (East Oltorf)",
  "address": "1314 E Oltorf St, Austin, TX 78704",
  "lat": 30.234534,
  "lng": -97.74337,
  "phone": "512-444-1314",
  "website": "https://www.centraltexasfoodbank.org/media/823/download",
  "hours": "Mon 11am–1pm & 5–6:30pm; Tue–Fri 11am–1pm",
  "hours_es": "lun 11am–1pm y 5–6:30pm; mar–vie 11am–1pm",
  "note": null,
  "note_es": null,
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": false
 },
 {
  "id": "sunrise-homeless-navigation-center",
  "name": "Sunrise Homeless Navigation Center",
  "org": null,
  "area": "South Austin (Westgate)",
  "address": "4430 Menchaca Rd, Austin, TX 78745",
  "lat": 30.228235,
  "lng": -97.789495,
  "phone": "512-444-4673",
  "website": "https://sunriseaustin.org/",
  "hours": "Mon–Fri 9am–1pm",
  "hours_es": "lun–vie 9am–1pm",
  "note": "Free meals and homeless services, one block south of Westgate Transit Center.",
  "note_es": "Comidas gratis y servicios para personas sin hogar, a una cuadra al sur de Westgate Transit Center.",
  "verify": false,
  "type": [
   "hot-meals",
   "hygiene"
  ],
  "spanish": false
 },
 {
  "id": "el-buen-food",
  "name": "El Buen Samaritano Food Pantry",
  "org": null,
  "area": "South Austin (Southwest)",
  "address": "7000 Woodhue Dr, Austin, TX 78745",
  "lat": 30.199079,
  "lng": -97.801632,
  "phone": "512-439-8900",
  "website": "https://elbuen.org/wellness/food-pantry/",
  "hours": "Tue & Thu 8:30–10:30am",
  "hours_es": "mar y jue 8:30–10:30am",
  "note": "No appointment needed. Diapers on the 3rd Wednesday. Ask about SNAP help.",
  "note_es": "No necesita cita. Pañales el 3er miércoles. Pregunte por ayuda con SNAP.",
  "verify": false,
  "type": [
   "pantry"
  ],
  "spanish": true
 },
 {
  "id": "ctfb-snap-application-help",
  "name": "Central Texas Food Bank SNAP Application Help",
  "org": null,
  "area": "Southeast Austin",
  "address": "6500 Metropolis Dr, Austin, TX 78744",
  "lat": 30.202104,
  "lng": -97.710306,
  "phone": "855-366-3401",
  "website": "https://www.centraltexasfoodbank.org/node/1",
  "hours": null,
  "hours_es": null,
  "note": "Help applying for SNAP by phone or in person. Call to book.",
  "note_es": "Ayuda para solicitar SNAP por teléfono o en persona. Llame para hacer cita.",
  "verify": false,
  "type": [
   "snap-help"
  ],
  "spanish": false
 }
];
window.HM_ZIPS = {"76511":[30.7991,-97.4263],"76527":[30.8076,-97.7812],"76530":[30.7398,-97.4451],"76537":[30.8119,-97.5942],"76574":[30.5708,-97.4094],"76578":[30.592,-97.2893],"78602":[30.1388,-97.2921],"78605":[30.7411,-98.0529],"78608":[30.9325,-97.9702],"78610":[30.0918,-97.8534],"78611":[30.7766,-98.2642],"78612":[30.0966,-97.4976],"78613":[30.5052,-97.8203],"78615":[30.4872,-97.3676],"78616":[29.9528,-97.581],"78617":[30.1745,-97.6134],"78619":[30.1072,-98.0327],"78620":[30.2268,-98.1029],"78621":[30.3231,-97.3737],"78626":[30.633,-97.6707],"78628":[30.6411,-97.7511],"78633":[30.7177,-97.7543],"78634":[30.5257,-97.5672],"78640":[29.9966,-97.8335],"78641":[30.5835,-97.8575],"78642":[30.663,-97.9316],"78644":[29.8868,-97.6769],"78645":[30.449,-97.9669],"78648":[29.6826,-97.6499],"78650":[30.2811,-97.2139],"78652":[30.1238,-97.8393],"78653":[30.3388,-97.5323],"78654":[30.5784,-98.2751],"78655":[29.8394,-97.8508],"78656":[29.8953,-97.8144],"78659":[30.1858,-97.1198],"78660":[30.4421,-97.6299],"78662":[29.9906,-97.4081],"78664":[30.5145,-97.668],"78665":[30.5145,-97.668],"78666":[29.8754,-97.9404],"78669":[30.3899,-98.0539],"78676":[30.0265,-98.1123],"78681":[30.5083,-97.6789],"78701":[30.2713,-97.7426],"78702":[30.2638,-97.7166],"78703":[30.2907,-97.7648],"78704":[30.2428,-97.7658],"78705":[30.2896,-97.7396],"78710":[30.352,-97.7151],"78712":[30.2852,-97.7354],"78717":[30.506,-97.7472],"78719":[30.1802,-97.6667],"78721":[30.2721,-97.6868],"78722":[30.2893,-97.715],"78723":[30.3085,-97.6849],"78724":[30.296,-97.6396],"78725":[30.2562,-97.6243],"78726":[30.43,-97.8326],"78727":[30.4254,-97.7195],"78728":[30.4417,-97.6811],"78729":[30.4521,-97.7688],"78730":[30.3607,-97.8241],"78731":[30.3471,-97.7609],"78732":[30.3752,-97.9007],"78733":[30.3314,-97.8666],"78734":[30.3705,-97.9427],"78735":[30.249,-97.8414],"78736":[30.2444,-97.916],"78737":[30.2107,-97.9427],"78738":[30.3337,-97.9824],"78739":[30.172,-97.8784],"78741":[30.2315,-97.7223],"78742":[30.2313,-97.6703],"78744":[30.1876,-97.7472],"78745":[30.2063,-97.7956],"78746":[30.2971,-97.8181],"78747":[30.1204,-97.7433],"78748":[30.1743,-97.8225],"78749":[30.2166,-97.8508],"78750":[30.4224,-97.7967],"78751":[30.3093,-97.7242],"78752":[30.3316,-97.7004],"78753":[30.3649,-97.6827],"78754":[30.3423,-97.6673],"78756":[30.3223,-97.739],"78757":[30.3437,-97.7316],"78758":[30.3764,-97.7078],"78759":[30.4036,-97.7526],"78798":[30.37,-97.68],"78799":[30.2672,-97.7431],"78953":[29.9241,-97.3119],"78957":[30.0178,-97.1494]};
