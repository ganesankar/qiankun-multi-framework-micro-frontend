# Qiankun(Single-SPA) based Multi Framework - Micro Frontend setup using  Lerna in Monorepo 

### App1 (Remote App, built with React)
### App2 (Host App, built with Angular)
### App3 (Remote App, built with Vue)

## Running code

## **Included Projects**

### **0. [Root](https://react.dev/)**

common app to load all other apps

### **1. [React Child 1](https://react.dev/)**

basic react app

## **Getting Started**

1. **Clone the Repository:**
```bash
git clone https://github.com/ganesankar/qiankun-multi-framework-micro-frontend.git
```
    
2. **Navigate to the Project Directory:** 
```bash
cd qiankun-multi-framework-micro-frontend
```
    
3. **Install Dependencies:**
```bash
npm install
```
    
4. **Use Lerna to Install Package Dependencies:**  
```bash
npx lerna bootstrap
```
    
5. **Run the Applications:**
 
Run `npm run start` . This will build and serve `App1`, `App2` & `App3` on ports 3001, 3002 and 3003 respectively.
Then open http://localhost:3000/ to load HOST app.

