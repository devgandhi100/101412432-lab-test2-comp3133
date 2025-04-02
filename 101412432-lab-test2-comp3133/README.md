# 🚀 COMP3133 Lab Test 2 - SpaceX Mission Explorer

This is an Angular-based single-page application that interacts with the [SpaceX Launches API](https://api.spacexdata.com/v3/launches) to display a list of missions, apply filters, and view detailed mission information.

---

## 📁 Project Structure

```
comp3133-lab-test2-spacex/
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
├── .gitignore
├── index.html
├── styles.css
├── src/
│   ├── main.ts
│   ├── app/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── spacex.service.ts
│   │   ├── models/
│   │   │   └── mission.ts
│   │   ├── missionlist/
│   │   |   ├── missionlist.component.ts
│   │   |   ├── missionlist.component.html
│   │   |   ├── missionlist.component.css
│   │   |   └── missionlist.component.spec.ts
│   │   ├── missionfilter/    
│   │   │   ├── missionfilter.component.ts
│   │   │   ├── missionfilter.component.html
│   │   │   ├── missionfilter.component.css
│   │   │   └── missionfilter.component.spec.ts
│   │   └── missiondetails/
│   │   ├── missiondetails.component.ts
│   │   ├── missiondetails.component.html
│   │   ├── missiondetails.component.css
│   │   └── missiondetails.component.spec.ts
```


---

## 🌐 Features

- ✅ View a list of all SpaceX missions
- 🔎 Filter missions by:
  - Launch year
  - Launch success
  - Landing success
- 🔁 Clear all filters
- 📄 View detailed information about any mission
- 🧭 Back button to return to the mission list
- 📱 Responsive UI with Angular Material
- 🎨 Icons for action buttons (Article, Wikipedia, Video)

---

## 🧪 Technologies Used

- Angular 17+
- TypeScript
- Angular Material
- RxJS
- SpaceX REST API

---

## 🚀 Getting Started

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/devgandhi100/101412432-lab-test2-comp3133.git
cd spacex-missions
```

### ✅ 2. Install Dependencies
```
npm install
```

### ✅ 3. Run the Development Server
```
ng serve
```

## 👨‍💻 Author
- Dev Gandhi
- Student ID: 101412432
