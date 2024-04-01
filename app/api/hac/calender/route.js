import puppeteer from "puppeteer";
import NodeRSA from "node-rsa";

const classes = {
  CATE00210: {
    name: "Survey of Agriculture Food & Natural Resources",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00310: {
    name: "Livestock Production",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00400: {
    name: "Small Animal Management",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00415: {
    name: "Small Animal Management@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00500: {
    name: "Equine Science",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00600: {
    name: "Veterinary Medical Applications@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00700: {
    name: "Animal Science@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE00810: {
    name: "Plant Soil Science@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE01510: {
    name: "Wildlife, Fisheries, & Ecology Management",
    weight: 5.0,
    multiplier: 1,
  },
  CATE01800: {
    name: "Floral Design 1",
    weight: 5.0,
    multiplier: 1,
  },
  CATE01900: {
    name: "Landscape Design & Management@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02010: {
    name: "Horticulture Science@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02200: {
    name: "Agricultural Mechanics, & Metal Technologies",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02350: {
    name: "Agricultural Structrures Design & Fabrications",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02500: {
    name: "Practicum in Agricultural Structures & Equipment@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE02503: {
    name: "Practicum in Veterinary Medical Applications@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE02505: {
    name: "Floral Design 2@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02600: {
    name: "Greenhouse Operation & Production@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02700: {
    name: "Agricultural Equipment Design & Fabrication@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02803: {
    name: "Internetworking I (CISCO 1)@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE02900: {
    name: "Cybersecurity@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE03742: {
    name: "PLTW Intro to Engineering Design@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE03743: {
    name: "PLTW Principles of Engineering@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE03744: {
    name: "PLTW Digital Electronics@CTEC",
    weight: 5.5,
    multiplier: 1,
  },
  CATE03745: {
    name: "PLTW Aerospace Engineering@CTEC",
    weight: 5.5,
    multiplier: 1,
  },
  CATE03747: {
    name: "PLTW Civil Engineering & Architecture@CTEC",
    weight: 5.5,
    multiplier: 1,
  },
  CATE03749: {
    name: "PLTW Engineering Design and Development@CTEC",
    weight: 5.5,
    multiplier: 1,
  },
  CATE03755: {
    name: "Engineering Design and Development Plus @ CTEC",
    weight: 5.5,
    multiplier: 2,
  },
  CATE04210: {
    name: "Architecture & Construction I@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE04300: {
    name: "Interior Design I",
    weight: 5.0,
    multiplier: 1,
  },
  CATE04600: {
    name: "Architectural Design I@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE04710: {
    name: "Architectural Design II@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE08360: {
    name: "Animation I@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE08450: {
    name: "Practicum in Animation@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE08460: {
    name: "Animation II@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE08500: {
    name: "Audio/Video Production I",
    weight: 5.0,
    multiplier: 1,
  },
  CATE08600: {
    name: "Audio/Video Production II",
    weight: 5.0,
    multiplier: 1,
  },
  CATE08860: {
    name: "Graphic Design & Illustration I@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE08960: {
    name: "Graphic Design & Illustration II@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE09000: {
    name: "Practicum in Graphic Design & Illustration@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE09300: {
    name: "Fashion Design I",
    weight: 5.0,
    multiplier: 1,
  },
  CATE09400: {
    name: "Fashion Design II",
    weight: 5.0,
    multiplier: 1,
  },
  CATE11210: {
    name: "Survey of Business, Marketing and Finance",
    weight: 5.0,
    multiplier: 1,
  },
  CATE11300: {
    name: "Touch System Data Entry",
    weight: 5.0,
    multiplier: 1,
  },
  CATE11400: {
    name: "Business Information Management I",
    weight: 5.0,
    multiplier: 1,
  },
  CATE11500: {
    name: "Business Information Management II@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE11710: {
    name: "Business Law",
    weight: 5.0,
    multiplier: 1,
  },
  CATE11800: {
    name: "Global Business",
    weight: 5.0,
    multiplier: 1,
  },
  CATE14215: {
    name: "Survey of Education & Training",
    weight: 5.0,
    multiplier: 1,
  },
  CATE14400: {
    name: "Education & Training@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE14500: {
    name: "Practicum in Education and Training@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE15100: {
    name: "Esports I",
    weight: 5.0,
    multiplier: 1,
  },
  CATE15200: {
    name: "Esports II",
    weight: 5.0,
    multiplier: 1,
  },
  CATE15300: {
    name: "Esports III@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE16210: {
    name: "Money Matters Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE16300: {
    name: "Banking & Financial Services",
    weight: 5.0,
    multiplier: 1,
  },
  CATE16410: {
    name: "Securities & Investment@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE16600: {
    name: "Accounting I",
    weight: 5.0,
    multiplier: 1,
  },
  CATE16700: {
    name: "Accounting II",
    weight: 5.0,
    multiplier: 1,
  },
  CATE18210: {
    name: "Survey of Government & Public Administration@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE18300: {
    name: "Political Science@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE18320: {
    name: "Competitive Trial Advocacy@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE18350: {
    name: "Mock Trial Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE18400: {
    name: "Practium in Government@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE18500: {
    name: "Foreign Services and Diplomacy@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE20200: {
    name: "Health Science",
    weight: 5.0,
    multiplier: 1,
  },
  CATE20310: {
    name: "Medical Terminology",
    weight: 5.0,
    multiplier: 1,
  },
  CATE21000: {
    name: "Future Ready Health Care@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE22300: {
    name: "Hotel Management Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE22410: {
    name: "Survey of Hospitality & Tourism",
    weight: 5.0,
    multiplier: 1,
  },
  CATE22510: {
    name: "Travel & Tourism Management",
    weight: 5.0,
    multiplier: 1,
  },
  CATE22600: {
    name: "Culinary Arts I@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE22610: {
    name: "Culinary Arts II@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE22810: {
    name: "Hospitality Services@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE22900: {
    name: "Practicum in Hospitatliy Services@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE23000: {
    name: "Food Science",
    weight: 5.0,
    multiplier: 1,
  },
  CATE24300: {
    name: "Dollars & Sense",
    weight: 5.0,
    multiplier: 1,
  },
  CATE24400: {
    name: "Interpersonal Studies",
    weight: 5.0,
    multiplier: 1,
  },
  CATE24500: {
    name: "Introduction to Culinary Arts",
    weight: 5.0,
    multiplier: 1,
  },
  CATE24710: {
    name: "Child Development Yr",
    weight: 5.0,
    multiplier: 1,
  },
  CATE24800: {
    name: "Child Guidance Yr@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE25001: {
    name: "Practicum in Child Guidance@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE27200: {
    name: "Survey of Information Technology",
    weight: 5.0,
    multiplier: 1,
  },
  CATE27300: {
    name: "Computer Maintenance",
    weight: 5.0,
    multiplier: 1,
  },
  CATE27600: {
    name: "Mobile App Programming Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE27700: {
    name: "Video Game Programming I@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE27800: {
    name: "Digital Media",
    weight: 5.0,
    multiplier: 1,
  },
  CATE27900: {
    name: "Web Design Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE28700: {
    name: "Video Game Programming II@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE28800: {
    name: "Video Game Programming III@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE29210: {
    name: "Survey of Law, Public Safety, Corrections & Security",
    weight: 5.0,
    multiplier: 1,
  },
  CATE29300: {
    name: "Law Enforcement I@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE29350: {
    name: "Law Enforcement II@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE29500: {
    name: "Forensic Science Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE29600: {
    name: "Court Systems and Practices@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34100: {
    name: "Social Media Marketing",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34250: {
    name: "Advertising",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34310: {
    name: "Fashion Marketing",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34400: {
    name: "Entrepreneurship",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34450: {
    name: "ACCELeratoredu",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34610: {
    name: "Sports & Entertainment Marketing",
    weight: 5.0,
    multiplier: 1,
  },
  CATE34710: {
    name: "Practicum in Marketing II",
    weight: 5.0,
    multiplier: 2,
  },
  CATE34711: {
    name: "Practicum in Marketing I",
    weight: 5.0,
    multiplier: 2,
  },
  CATE34750: {
    name: "Sports Management @WHS",
    weight: 5.0,
    multiplier: 2,
  },
  CATE35100: {
    name: "Practicum in Sports Broadcasting I@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE35200: {
    name: "Practicum in Sports Broadcasting II@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CATE36100: {
    name: "Architecture & Construction II@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE36200: {
    name: "Introduction to Welding@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  CATE36300: {
    name: "Practicum in News Production I",
    weight: 5.0,
    multiplier: 2,
  },
  CATE36400: {
    name: "Practicum in News Production II",
    weight: 5.0,
    multiplier: 2,
  },
  CATE36600: {
    name: "Practicum in Information Technology@CTEC",
    weight: 5.0,
    multiplier: 2,
  },
  CMR00110: {
    name: "Naval Science 1",
    weight: 5.0,
    multiplier: 1,
  },
  CMR00120: {
    name: "Naval Science 2",
    weight: 5.0,
    multiplier: 1,
  },
  CMR00130: {
    name: "Naval Science 3",
    weight: 5.0,
    multiplier: 1,
  },
  CMR00140: {
    name: "Naval Science 4",
    weight: 5.0,
    multiplier: 1,
  },
  COL02820: {
    name: "Internetworking II (CISCO 2-3)",
    weight: 5.5,
    multiplier: 1,
  },
  COL04000: {
    name: "Health Science Clinical",
    weight: 5.0,
    multiplier: 2,
  },
  COL04100: {
    name: "Practicum in Health Science",
    weight: 5.0,
    multiplier: 2,
  },
  COL04200: {
    name: "Rehabilitation Aide",
    weight: 5.0,
    multiplier: 2,
  },
  COL04300: {
    name: "Medical Scribe",
    weight: 5.0,
    multiplier: 2,
  },
  COL04570: {
    name: "Pharmacy Technician",
    weight: 5.0,
    multiplier: 2,
  },
  COL36600: {
    name: "Emergency Medical Technician@CC",
    weight: 5.0,
    multiplier: 2,
  },
  COL36700: {
    name: "Baking Pastry S1@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  COL36701: {
    name: "Baking Pastry LC S1@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  COLM0200: {
    name: "Collin Dual Credit English 3",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0210: {
    name: "Collin Dual Credit Literature for Seniors",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0220: {
    name: "Collin Dual Credit Composition for Seniors",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0300: {
    name: "Collin Dual Credit Art Appreciation",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0410: {
    name: "Collin Dual Credit Statistics",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0420: {
    name: "Collin Dual Credit College Algebra",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0430: {
    name: "Collin Dual Credit Pre-Calculus",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0440: {
    name: "Collin Dual Credit Calculus I",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0450: {
    name: "Collin Dual Credit Calculus III",
    weight: 6.0,
    multiplier: 1,
  },
  COLM0460: {
    name: "Collin Dual Credit Differential Equations",
    weight: 6.0,
    multiplier: 1,
  },
  COLM0500: {
    name: "Collin Dual Credit Biology for Non-Science Majors",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0510: {
    name: "Collin Dual Credit Biology for Science Majors",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0600: {
    name: "Collin Dual Credit US Government",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0610: {
    name: "Collin Dual Credit Microeconomics",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0620: {
    name: "Collin Dual Credit Texas Government",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0630: {
    name: "Collin Dual Credit Sociology",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0640: {
    name: "Collin Dual Credit US History",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0650: {
    name: "Collin Dual Credit Learning Framework",
    weight: 5.5,
    multiplier: 1,
  },
  COLM0700: {
    name: "Collin Dual Credit Intro to Speech Communication",
    weight: 5.5,
    multiplier: 1,
  },
  ELA11100: {
    name: "English I",
    weight: 5.0,
    multiplier: 1,
  },
  ELA11200: {
    name: "English I Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  ELA11500: {
    name: "GT Humanities I/English I Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  ELA12100: {
    name: "English II",
    weight: 5.0,
    multiplier: 1,
  },
  ELA12200: {
    name: "English II Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  ELA13100: {
    name: "English III",
    weight: 5.0,
    multiplier: 1,
  },
  ELA13300: {
    name: "AP English Language & Composition",
    weight: 6.0,
    multiplier: 1,
  },
  ELA14100: {
    name: "English IV",
    weight: 5.0,
    multiplier: 1,
  },
  ELA14300: {
    name: "AP English Literature & Composition",
    weight: 6.0,
    multiplier: 1,
  },
  ELA21100: {
    name: "Debate I",
    weight: 5.0,
    multiplier: 1,
  },
  ELA21200: {
    name: "Oral Interpretation I",
    weight: 5.0,
    multiplier: 1,
  },
  ELA22100: {
    name: "Debate II",
    weight: 5.0,
    multiplier: 1,
  },
  ELA22200: {
    name: "Oral Interpretation II",
    weight: 5.0,
    multiplier: 1,
  },
  ELA23100: {
    name: "Debate III",
    weight: 5.0,
    multiplier: 1,
  },
  ELA25500: {
    name: "Professional Communication",
    weight: 5.0,
    multiplier: 1,
  },
  ELA25600: {
    name: "Advanced Public Speaking",
    weight: 5.0,
    multiplier: 1,
  },
  ELA35100: {
    name: "Creative and Imaginative Writing",
    weight: 5.0,
    multiplier: 1,
  },
  ELA41100: {
    name: "Journalism",
    weight: 5.0,
    multiplier: 1,
  },
  ELA41600: {
    name: "Yearbook I",
    weight: 5.0,
    multiplier: 1,
  },
  ELA42600: {
    name: "Advanced Journalism/Yearbook II-III",
    weight: 5.0,
    multiplier: 1,
  },
  ELA43110: {
    name: "Newspaper I",
    weight: 5.0,
    multiplier: 1,
  },
  ELA43111: {
    name: "Newspaper 2",
    weight: 5.0,
    multiplier: 1,
  },
  ELA43112: {
    name: "Newspaper 3",
    weight: 5.0,
    multiplier: 1,
  },
  ELA43600: {
    name: "Yearbook 3",
    weight: 5.0,
    multiplier: 1,
  },
  ELA43601: {
    name: "Independent Study in Journalism",
    weight: 5.0,
    multiplier: 1,
  },
  ELA44100: {
    name: "Photojournalism",
    weight: 5.0,
    multiplier: 1,
  },
  ELA71000: {
    name: "GT American Studies/AP English Language & Composition",
    weight: 6.0,
    multiplier: 1,
    name: "! THIS IS SET TO MULTIPLIER 1 BECAUSE IT SHOWS UP IN HAC TWICE ANYWAY",
  },
  ELA85300: {
    name: "AP Research",
    weight: 6.0,
    multiplier: 1,
  },
  ELC11100: {
    name: "LeadWorthy 1",
    weight: 5.0,
    multiplier: 1,
  },
  ELC11120: {
    name: "Academic Decathlon I",
    weight: 5.5,
    multiplier: 1,
  },
  ELC11140: {
    name: "Academic Decathlon II",
    weight: 5.5,
    multiplier: 1,
  },
  ELC11160: {
    name: "Academic Decathlon III",
    weight: 5.5,
    multiplier: 1,
  },
  ELC11170: {
    name: "Academic Decathlon IV",
    weight: 5.5,
    multiplier: 1,
  },
  ELC12100: {
    name: "LeadWorthy 2",
    weight: 5.0,
    multiplier: 1,
  },
  ELC12110: {
    name: "Student Congress 1",
    weight: 5.0,
    multiplier: 1,
  },
  ELC12200: {
    name: "AVID 9th Grade (Advancement Via Individual Determination)",
    weight: 5.0,
    multiplier: 1,
  },
  ELC12300: {
    name: "AVID 10th Grade (Advancement Via Individual Determination)",
    weight: 5.0,
    multiplier: 1,
  },
  ELC12400: {
    name: "AVID 11th Grade (Advancement Via Individual Determination)",
    weight: 5.0,
    multiplier: 1,
  },
  ELC12500: {
    name: "AVID 12th Grade (Advancement Via Individual Determination)",
    weight: 5.0,
    multiplier: 1,
  },
  ELC14115: {
    name: "Independent Study and Mentorship Year 1",
    weight: 5.5,
    multiplier: 1,
  },
  ELC14125: {
    name: "Independent Study and Mentorship Year 2",
    weight: 5.5,
    multiplier: 1,
  },
  ELC21000: {
    name: "Peer Assistance & Leadership (PALS/Student Ambassadors)",
    weight: 5.0,
    multiplier: 1,
  },
  ELC22000: {
    name: "Peer Assistance & Leadership (PALS/Student Ambassadors)",
    weight: 5.0,
    multiplier: 1,
  },
  ELC55110: {
    name: "Sports Medicine",
    weight: 5.0,
    multiplier: 1,
  },
  FLG11100: {
    name: "French 1",
    weight: 5.0,
    multiplier: 1,
  },
  FLG12100: {
    name: "French 2",
    weight: 5.0,
    multiplier: 1,
  },
  FLG13200: {
    name: "French 3 Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  FLG14300: {
    name: "French 4 AP",
    weight: 6.0,
    multiplier: 1,
  },
  FLG21100: {
    name: "Spanish 1",
    weight: 5.0,
    multiplier: 1,
  },
  FLG22100: {
    name: "Spanish 2",
    weight: 5.0,
    multiplier: 1,
  },
  FLG23200: {
    name: "Spanish 3 Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  FLG24300: {
    name: "Spanish 4 AP",
    weight: 6.0,
    multiplier: 1,
  },
  FLG25300: {
    name: "Spanish 5 AP",
    weight: 6.0,
    multiplier: 1,
  },
  FLG41100: {
    name: "American Sign Language 1",
    weight: 5.0,
    multiplier: 1,
  },
  FLG41101: {
    name: "American Sign Language 2",
    weight: 5.0,
    multiplier: 1,
  },
  FLG61100: {
    name: "Chinese 1",
    weight: 5.0,
    multiplier: 1,
  },
  FLG62100: {
    name: "Chinese 2",
    weight: 5.0,
    multiplier: 1,
  },
  FLG63100: {
    name: "Chinese 3 Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  FLG64300: {
    name: "Chinese 4 AP",
    weight: 6.0,
    multiplier: 1,
  },
  FNA11100: {
    name: "Art I",
    weight: 5.0,
    multiplier: 1,
  },
  FNA11150: {
    name: "Art I Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  FNA12100: {
    name: "Art II",
    weight: 5.0,
    multiplier: 1,
  },
  FNA12102: {
    name: "Art II Ceramics",
    weight: 5.0,
    multiplier: 1,
  },
  FNA12200: {
    name: "Art II Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  FNA13100: {
    name: "Art III",
    weight: 5.5,
    multiplier: 1,
  },
  FNA14100: {
    name: "Art IV",
    weight: 5.5,
    multiplier: 1,
  },
  FNA14300: {
    name: "AP Studio Art - Drawing",
    weight: 6.0,
    multiplier: 1,
  },
  FNA14310: {
    name: "AP Art History",
    weight: 6.0,
    multiplier: 1,
  },
  FNA14320: {
    name: "AP Studio Art - 2D Design",
    weight: 6.0,
    multiplier: 1,
  },
  FNA14330: {
    name: "AP Studio Art - 3D Design",
    weight: 6.0,
    multiplier: 1,
  },
  FNA25101: {
    name: "Band",
    weight: 5.0,
    multiplier: 1,
  },
  FNA25201: {
    name: "Instrumental Ensemble: Band",
    weight: 5.0,
    multiplier: 1,
  },
  FNA25914: {
    name: "Choir",
    weight: 5.0,
    multiplier: 1,
  },
  FNA26101: {
    name: "Orchestra",
    weight: 5.0,
    multiplier: 1,
  },
  FNA26205: {
    name: "Instrumental Ensemble: Orchestra",
    weight: 5.0,
    multiplier: 1,
  },
  FNA31113: {
    name: "Vocal Ensemble",
    weight: 5.0,
    multiplier: 1,
  },
  FNA41100: {
    name: "Theatre Arts I",
    weight: 5.0,
    multiplier: 1,
  },
  FNA41101: {
    name: "Intermediate Theatre Arts I",
    weight: 5.0,
    multiplier: 1,
  },
  FNA41102: {
    name: "Technical Theatre I",
    weight: 5.0,
    multiplier: 1,
  },
  FNA41104: {
    name: "Theatre Arts II",
    weight: 5.0,
    multiplier: 1,
  },
  FNA41105: {
    name: "Technical Theatre II",
    weight: 5.0,
    multiplier: 1,
  },
  FNA41121: {
    name: "Intermediate Technical Theatre I",
    weight: 5.0,
    multiplier: 1,
  },
  FNA51101: {
    name: "Dance I - Fundamentals",
    weight: 5.0,
    multiplier: 1,
  },
  FNA51110: {
    name: "Color Guard 1 YR",
    weight: 5.0,
    multiplier: 1,
  },
  FNA52101: {
    name: "Dance II - Technique",
    weight: 5.0,
    multiplier: 1,
  },
  FNA52110: {
    name: "Color Guard 2 YR",
    weight: 5.0,
    multiplier: 1,
  },
  FNA53101: {
    name: "Dance III - Intermediate",
    weight: 5.0,
    multiplier: 1,
  },
  FNA53110: {
    name: "Color Guard 3 YR",
    weight: 5.0,
    multiplier: 1,
  },
  FNA54101: {
    name: "Dance IV - Advanced",
    weight: 5.0,
    multiplier: 1,
  },
  FNA54110: {
    name: "Color Guard 4 YR",
    weight: 5.0,
    multiplier: 1,
  },
  FNA65300: {
    name: "AP Music Theory",
    weight: 6.0,
    multiplier: 1,
  },
  FNA65400: {
    name: "Music Theory 1",
    weight: 5.0,
    multiplier: 1,
  },
  HPE45100: {
    name: "Health Education",
    weight: 5.0,
    multiplier: 1,
  },
  IB011001: {
    name: "IB Theory of Knowledge Part 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB011002: {
    name: "IB Theory of Knowledge Part 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB22100Y: {
    name: "IB Mathematic: applications and interpretation SL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB22120Y: {
    name: "IB Mathematic: applications and interpretation SL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB22200Y: {
    name: "IB Mathematic: analysis and approaches HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB22220Y: {
    name: "IB Mathematic: analysis and approaches HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB31100Y: {
    name: "IB History SL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB31100Y: {
    name: "IB History SL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB31200Y: {
    name: "IB History of the Americas HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB31200Y: {
    name: "IB History of the Americas HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB33100Y: {
    name: "IB Psychology SL",
    weight: 6.0,
    multiplier: 2,
  },
  IB41100Y: {
    name: "IB French SL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB41120Y: {
    name: "IB French SL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB42100Y: {
    name: "IB Spanish SL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB42120Y: {
    name: "IB Spanish SL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB42200Y: {
    name: "IB Spanish HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB42220Y: {
    name: "IB Spanish HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB51100Y: {
    name: "IB Visual Arts SL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB51100Y: {
    name: "IB Visual Arts SL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB51200Y: {
    name: "IB Visual Arts HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB51200Y: {
    name: "IB Visual Arts HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB52100Y: {
    name: "IB Music SL",
    weight: 6.0,
    multiplier: 2,
  },
  IB61200Y: {
    name: "IB Biology HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB61220Y: {
    name: "IB Biology HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB62100Y: {
    name: "IB Environmental Systems and Societies SL",
    weight: 6.0,
    multiplier: 2,
  },
  IB63100Y: {
    name: "IB Physics SL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB63120Y: {
    name: "IB Physics SL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB63200Y: {
    name: "IB Physics HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB63220Y: {
    name: "IB Physics HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  IB71200Y: {
    name: "IB Language and Literature HL Year 1",
    weight: 6.0,
    multiplier: 1,
  },
  IB71220Y: {
    name: "IB Language and Literature HL Year 2",
    weight: 6.0,
    multiplier: 1,
  },
  MTH11100: {
    name: "Algebra I",
    weight: 5.0,
    multiplier: 1,
  },
  MTH11200: {
    name: "Algebra I Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  MTH12100: {
    name: "Algebra II",
    weight: 5.0,
    multiplier: 1,
  },
  MTH12200: {
    name: "Algebra II Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  MTH23100: {
    name: "Geometry",
    weight: 5.0,
    multiplier: 1,
  },
  MTH23200: {
    name: "Geometry Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  MTH34100: {
    name: "Precalculus",
    weight: 5.0,
    multiplier: 1,
  },
  MTH34200: {
    name: "Precalculus Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  MTH36100: {
    name: "AQR",
    weight: 5.0,
    multiplier: 1,
  },
  MTH37100: {
    name: "Statistics",
    weight: 5.0,
    multiplier: 1,
  },
  MTH45300: {
    name: "AP Calculus AB",
    weight: 6.0,
    multiplier: 1,
  },
  MTH45305: {
    name: "AP Calculus BC",
    weight: 6.0,
    multiplier: 1,
  },
  MTH45310: {
    name: "AP Statistics",
    weight: 6.0,
    multiplier: 1,
  },
  MTH52100: {
    name: "Algebraic Reasoning",
    weight: 5.0,
    multiplier: 1,
  },
  PEC01001: {
    name: "Cheerleading EQ1",
    weight: 5.0,
    multiplier: 1,
  },
  PEF02001: {
    name: "Partners PE",
    weight: 5.0,
    multiplier: 1,
  },
  PELF1001: {
    name: "Lifetime Fitness and Wellness",
    weight: 5.0,
    multiplier: 1,
  },
  PELR1001: {
    name: "Lifetime Recreation and Outdoor Education",
    weight: 5.0,
    multiplier: 1,
  },
  PESB1001: {
    name: "Skills-Based Activities",
    weight: 5.0,
    multiplier: 1,
  },
  SCI11100: {
    name: "Biology",
    weight: 5.0,
    multiplier: 1,
  },
  SCI11200: {
    name: "Biology Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  SCI13300: {
    name: "AP Biology",
    weight: 6.0,
    multiplier: 1,
  },
  SCI22100: {
    name: "Chemistry",
    weight: 5.0,
    multiplier: 1,
  },
  SCI22200: {
    name: "Chemistry Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  SCI24300: {
    name: "AP Chemistry",
    weight: 6.0,
    multiplier: 1,
  },
  SCI33100: {
    name: "Physics",
    weight: 5.0,
    multiplier: 1,
  },
  SCI34400: {
    name: "AP Physics 1",
    weight: 6.0,
    multiplier: 1,
  },
  SCI34500: {
    name: "AP Physics 2",
    weight: 6.0,
    multiplier: 1,
  },
  SCI35500: {
    name: "AP Physics C",
    weight: 6.0,
    multiplier: 2,
  },
  SCI42100: {
    name: "Integrated Physics & Chemistry (IPC)",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43100: {
    name: "Environmental Science",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43110: {
    name: "Anatomy & Physiology",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43120: {
    name: "Aquatic Science",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43131: {
    name: "Earth Systems Science (ESS)",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43145: {
    name: "Medical Microbio@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43155: {
    name: "Pathophysiology Yr@CTEC",
    weight: 5.0,
    multiplier: 1,
  },
  SCI43300: {
    name: "AP Environmental Science",
    weight: 6.0,
    multiplier: 1,
  },
  SCI44100: {
    name: "Astronomy",
    weight: 5.0,
    multiplier: 1,
  },
  SST11100: {
    name: "World Geography",
    weight: 5.0,
    multiplier: 1,
  },
  SST11500: {
    name: "AP Human Geography",
    weight: 6.0,
    multiplier: 1,
  },
  SST22100: {
    name: "World History",
    weight: 5.0,
    multiplier: 1,
  },
  SST22300: {
    name: "AP World History",
    weight: 6.0,
    multiplier: 1,
  },
  SST22400: {
    name: "GT Humanities II/AP World History",
    weight: 6.0,
    multiplier: 1,
  },
  SST23100: {
    name: "US History",
    weight: 5.0,
    multiplier: 1,
  },
  SST23300: {
    name: "AP US History",
    weight: 6.0,
    multiplier: 1,
  },
  SST23310: {
    name: "AP European History",
    weight: 6.0,
    multiplier: 1,
  },
  SST23400: {
    name: "African American Studies",
    weight: 5.0,
    multiplier: 1,
  },
  SST23500: {
    name: "Mexican American Studies",
    weight: 5.0,
    multiplier: 1,
  },
  SST34100: {
    name: "Government",
    weight: 5.0,
    multiplier: 1,
  },
  SST34110: {
    name: "Economics",
    weight: 5.0,
    multiplier: 1,
  },
  SST34120: {
    name: "Personal Financial Literacy and Economics",
    weight: 5.0,
    multiplier: 1,
  },
  SST34300: {
    name: "AP Government",
    weight: 6.0,
    multiplier: 1,
  },
  SST34310: {
    name: "AP Macroeconomics",
    weight: 6.0,
    multiplier: 1,
  },
  SST45100: {
    name: "Sociology",
    weight: 5.0,
    multiplier: 1,
  },
  SST45110: {
    name: "Psychology",
    weight: 5.0,
    multiplier: 1,
  },
  SST45300: {
    name: "AP Psychology- 12th Grade Only",
    weight: 6.0,
    multiplier: 1,
  },
  SST45500: {
    name: "AP Psychology with Social Studies Research",
    weight: 6.0,
    multiplier: 1,
    weight2: 5.0,
    name: "! THIS IS 5.0 FIRST SEM AND 6.0 SECOND SEM, IDK HOW U GONNA CODE THAT",
  },
  SST65100: {
    name: "Personal Financial Literacy",
    weight: 5.0,
    multiplier: 1,
  },
  SST85300: {
    name: "AP Seminar",
    weight: 6.0,
    multiplier: 1,
  },
  SST85350: {
    name: "AP Seminar: Multicultural Section",
    weight: 6.0,
    multiplier: 1,
  },
  SUBA1001: {
    name: "Baseball 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1002: {
    name: "Baseball 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1003: {
    name: "Baseball 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1004: {
    name: "Baseball 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1101: {
    name: "Basketball 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1102: {
    name: "Basketball 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1103: {
    name: "Basketball 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1104: {
    name: "Basketball 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1201: {
    name: "Basketball Girls 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1202: {
    name: "Basketball Girls 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1203: {
    name: "Basketball Girls 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1204: {
    name: "Basketball Girls 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1301: {
    name: "Football 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1302: {
    name: "Football 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1303: {
    name: "Football 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1304: {
    name: "Football 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1401: {
    name: "Varsity Golf 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1402: {
    name: "Varsity Golf 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1403: {
    name: "Varsity Golf 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1404: {
    name: "Varsity Golf 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1411: {
    name: "JV Golf 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1412: {
    name: "JV Golf 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1413: {
    name: "JV Golf 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1501: {
    name: "Soccer 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1502: {
    name: "Soccer 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1503: {
    name: "Soccer 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1504: {
    name: "Soccer 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1601: {
    name: "Soccer Girls 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1602: {
    name: "Soccer Girls 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1603: {
    name: "Soccer Girls 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1604: {
    name: "Soccer Girls 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1701: {
    name: "Softball 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1702: {
    name: "Softball 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1703: {
    name: "Softball 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1704: {
    name: "Softball 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1801: {
    name: "Varsity Swimming 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1802: {
    name: "Varsity Swimming 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1803: {
    name: "Varsity Swimming 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1804: {
    name: "Varsity Swimming 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1811: {
    name: "JV Swimming 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1812: {
    name: "JV Swimming 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1813: {
    name: "JV Swimming 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1814: {
    name: "JV Swimming 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1901: {
    name: "Varsity Tennis 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1902: {
    name: "Varsity Tennis 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1903: {
    name: "Varsity Tennis 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1904: {
    name: "Varsity Tennis 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1911: {
    name: "JV Tennis 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1912: {
    name: "JV Tennis 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1913: {
    name: "JV Tennis 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA1914: {
    name: "JV Tennis 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2001: {
    name: "Track Boys 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2002: {
    name: "Track Boys 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2003: {
    name: "Track Boys 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2004: {
    name: "Track Boys 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2101: {
    name: "Track Girls 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2102: {
    name: "Track Girls 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2103: {
    name: "Track Girls 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2104: {
    name: "Track Girls 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2305N: {
    name: "Volleyball NC",
    weight: 0,
    multiplier: 0,
  },
  SUBA2401: {
    name: "Wrestling Boys 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2402: {
    name: "Wrestling Boys 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2403: {
    name: "Wrestling Boys 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2404: {
    name: "Wrestling Boys 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2501: {
    name: "Wrestling Girls 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2502: {
    name: "Wrestling Girls 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2503: {
    name: "Wrestling Girls 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2504: {
    name: "Wrestling Girls 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2601: {
    name: "Power Lifting 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2602: {
    name: "Power Lifting 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2603: {
    name: "Power Lifting 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2604: {
    name: "Power Lifting 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2701: {
    name: "Cross Country 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2702: {
    name: "Cross Country 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2703: {
    name: "Cross Country 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2704: {
    name: "Cross Country 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2801: {
    name: "Diving 1 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2802: {
    name: "Diving 1 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2803: {
    name: "Diving 1 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2804: {
    name: "Diving 1 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2901: {
    name: "Diving 2 9th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2902: {
    name: "Diving 2 10th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2903: {
    name: "Diving 2 11th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA2904: {
    name: "Diving 2 12th Grade",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA3000: {
    name: "Athletic Trainer",
    weight: 5.0,
    multiplier: 1,
  },
  SUBA3001N: {
    name: "Off Campus PE",
    weight: 0,
    multiplier: 0,
  },
  TEC21100: {
    name: "Computer Science 1",
    weight: 5.0,
    multiplier: 1,
  },
  TEC21200: {
    name: "Computer Science 1 Advanced",
    weight: 5.5,
    multiplier: 1,
  },
  TEC21250: {
    name: "AP Computer Science Principles",
    weight: 6.0,
    multiplier: 1,
  },
  TEC21300: {
    name: "AP Computer Science A",
    weight: 6.0,
    multiplier: 2,
  },
  TEC22200: {
    name: "Computer Science 3 Adv",
    weight: 6.0,
    multiplier: 1,
  },
  TEC22400: {
    name: "3D Modeling & Animation",
    weight: 5.0,
    multiplier: 1,
  },
  UNT13101: {
    name: "UNT Now! Dual Credit English 3 - Sem 1/2",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13110: {
    name: "UNT Online Dual Credit English 3 - Sem 1/2",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13201: {
    name: "UNT Now! Dual Credit US History 1/2",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13301: {
    name: "UNT Now! Dual Credit US Government",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13310: {
    name: "UNT Online Dual Credit US Government",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13501: {
    name: "UNT Now! Dual Credit Texas Government",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13601: {
    name: "UNT Now! Dual Credit Art Appreciation",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13701: {
    name: "UNT Now! Dual Credit Intro to Communication",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13902: {
    name: "UNT Now! Dual Credit English 4 - Sem 1/2",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13910: {
    name: "UNT Online Dual Credit English - Year 2- Sem 1/2",
    weight: 5.5,
    multiplier: 1,
  },
  UNT13920: {
    name: "UNT Online Dual Credit English 4 - Sem 1/2",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14002: {
    name: "UNT Now! Dual Credit Microeconomics",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14010: {
    name: "UNT Online Dual Credit Microeconomics",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14102: {
    name: "UNT Now! Dual Credit Statistics",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14201: {
    name: "UNT Now! Dual Credit Environmental Science",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14301: {
    name: "UNT Now! Dual Credit Earth Science",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14302: {
    name: "UNT Now! Dual Credit Earth Science",
    weight: 5.5,
    multiplier: 1,
  },
  UNT14401: {
    name: "UNT Online Education Field of Study",
    weight: 5.5,
    multiplier: 1,
  },
};

export async function GET() {
  return Response.json({ success: false, error: "Invaild method" });
}

export async function POST(req, res) {
  const { token, options } = await req.json();
  const decrypter = new NodeRSA(process.env.PRIKEY);
  const [username, password] = decrypter.decrypt(token, "utf8").split(" % ");
  if (options.getUpAssign) {
    const url = "https://hac.friscoisd.org/homeaccess/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.setUserAgent(
        "Mozilla/5.0 (X11; Linux x86_64)" +
          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36"
      );
      await page.goto(url);
      await page.evaluate(
        (username, password) => {
          document.querySelector("#LogOnDetails_UserName").value = username;
          document.querySelector("#LogOnDetails_Password").value = password;
        },
        username,
        password
      );
      await page.click(".sg-submit-button");
      await page.waitForSelector(
        ".sg-banner-menu-element.sg-menu-element-identity",
        { timeout: 5000 }
      );
      await page.goto("https://hac.friscoisd.org/HomeAccess/Home/Calendar");
      await page.waitForSelector(".sg-calendar-event");
      const filteredArray = await page.$$eval("script", (scripts) =>
        JSON.parse(
          scripts
            .map((src) => src.innerHTML)
            .filter((el) => el.includes("calendarEvents"))[0]
            .split("\n")
            .filter((el) => el.includes("calendarEvents"))[0]
            .replace(/this.data\W=\W|;$/gm, "")
            .trim()
            .slice(20)
        )
      );

      const dataToSend = filteredArray.AssignmentCourses.map((e) => {
        const title = e.Key.TooltipTitle;
        const date = JSON.parse(
          e.Key.TooltipDueDate.slice(6, e.Key.TooltipDueDate.length - 2)
        );
        const category = e.Key.TooltipCategory;
        let name = e.Key.Course;
        if (classes[e.Key.Course.slice(0, 8)]) {
          name = classes[e.Key.Course.slice(0, 8)].name;
        } else if (classes[e.Key.Course]) {
          name = classes[e.Key.Course].name;
        }
        return { title, category, date, name };
      });

      return Response.json({ success: true, data: dataToSend });
    } catch (e) {
      if (
        await page.evaluate(() => {
          try {
            return document.querySelector(".validation-summary-errors")
              .outerHTML;
          } catch {
            return undefined;
          }
        })
      ) {
        return Response.json({ success: false, wrongPas: true });
      } else {
        console.log(e);
      }
      return Response.json({ success: false, wrongPas: false });
    } finally {
      await page.goto("https://hac.friscoisd.org/HomeAccess/Account/Logoff");
      await page.waitForSelector(".caption");
      await browser.close();
    }
  }
}
