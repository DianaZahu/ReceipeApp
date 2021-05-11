# ReceipeApp

Aplicatia ReceipeApp isi propune oferirea unui motor de cautare a diverselor retete, precum si a unei sectiuni de creare a unei liste cu retete pe care am dori sa le incercam.
Aceasta aplicatie foloseste un API public (Edamam recipes) pentru motorul de cautare.

## Instructiuni instalare
Arhitectura aplicației este de tip Single-Page Applicațion. Partea de frontend conține o interfață dezvoltată folosind HTML si CSS, iar backend-ul permite accesul la date prin intermediul unui API RESTful dezvoltat cu NodeJS și ExpressJS. Datele sunt stocate într-o baza de date relațională (MySQL). Accesul la date se face prin Sequelize.

### Configurare backend
* Pentru codul sursa :
```bash
git clone https://github.com/DianaZahu/ReceipeApp.git
```
* Instalează modulele npm

```bash
npm install
```
* Configurează un server MySQL și creează o bază de date

### Configurare frontend
1. Navighează în directorul frontend
```
cd frontend
```
2. Instalează modulele npm

```bash
npm install
```
3. Adăugați setările pentru mediu 

### Pornire aplicație
```bash
node server.js
```
```bash
npm start
```

## Exemple de request si response

### Request
![image](https://user-images.githubusercontent.com/83589225/117860974-91c0bc80-b299-11eb-92b0-da71ef50b8b9.png)

### Response
{"q":"pizza","from":0,"to":20,"more":true,"count":7000,"hits":[{"recipe":{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_1b6dfeaf0988f96b187c7c9bb69a14fa","label":"Pizza Dough","image":"https://www.edamam.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg","source":"Lottie + Doof","url":"http://www.lottieanddoof.com/2010/01/pizza-pulp-fiction-jim-lahey/","shareAs":"http://www.edamam.com/recipe/pizza-dough-1b6dfeaf0988f96b187c7c9bb69a14fa/pizza","yield":4.0,"dietLabels":[],"healthLabels":["Vegetarian","Pescatarian","Egg-Free","Peanut-Free","Tree-Nut-Free","Soy-Free","Fish-Free","Shellfish-Free","Pork-Free","Red-Meat-Free","Celery-Free","Mustard-Free","Sesame-Free","Lupine-Free","Mollusk-Free","Alcohol-Free","Kosher"],"cautions":["FODMAP"],"ingredientLines":["500 g bread flour(3 3/4 cups)","2 1/2 tsp Dry Yeast instant or active (10 grams)","3/4 tsp Table Salt(5 grams)","3/4 tsp Sugar, plus a pinch (about 3 grams)","1 1/2 cup water at room temperature","extra-virgin olive oil for pans","2 x yellow onions(medium), finely chopped (pizza cipolla)","1/3 cup Heavy Cream(pizza cipolla)","1 tsp Kosher Salt(pizza cipolla)","2 tsp fresh thyme, coarsely chopped(pizza cipolla)","7 oz diced tomatoes, drained(pizza pomodoro)","3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)","2 tsp Extra Virgin Olive Oil(pizza pomodoro)","1/2 tsp Kosher Salt(pizza pomodoro)","1 pinch Red Pepper Flakes(pizza pomodoro)","8 x fresh basil (large leaves), chopped(pizza pomodoro)"],"ingredients":[{"text":"500 g bread flour(3 3/4 cups)","weight":513.75,"foodCategory":"grains","foodId":"food_b5xk0gwa3clakbaap10sta82dgdk","image":"https://www.edamam.com/food-img/132/1328fd505cdd3b75fbb8d7b58de5427c.jpg"},{"text":"2 1/2 tsp Dry Yeast instant or active (10 grams)","weight":10.0,"foodCategory":"condiments and sauces","foodId":"food_a2xisx4br72i19btvvxgzayoelqj","image":"https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"}


## Capturi ecran aplicație

![image](https://user-images.githubusercontent.com/83589225/117862282-28da4400-b29b-11eb-9756-61396cb554f6.png)

Aici se regasesc motorul de cautare (se cauta prin apasarea tastei ENTER) si sectiunea unde se poate crea lista (se introduce textul in ReceipeName, se apasa butonul submit, iar ulterior textul se va insera in Receipe Name).

![image](https://user-images.githubusercontent.com/83589225/117862879-d2b9d080-b29b-11eb-8efb-12ec922374be.png)


