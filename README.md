# Qiankun(Single-SPA) based Multi Framework - Micro Frontend setup using  Lerna in Monorepo 

### App1 (React Host App, runs at Port 3000) 
### App2 (React App, runs at Port 3001) 
### App3 (Vue App, runs at Port 3002) 
### App4 (Angular App, runs at Port 3003) 
### App5 (Svelte App, runs at Port 3004) 
### App6 (Preact App, runs at Port 3005) 
### App7 (JQuery App, runs at Port 3006) 
### App8 (Solidjs App, runs at Port 3007) 

![image](https://github.com/user-attachments/assets/1e624b01-ee0a-423a-bd55-b348a1d6de5f)

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

