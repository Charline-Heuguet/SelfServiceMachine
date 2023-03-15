var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
    
];

// 1-  on crée un objet qui contiendra toute la logique de notre application
const SelfServiceMachine = {
    //propriétés de l'objet

    //toutes les données d'une application vont se trouver dans une ppt de données "data ()" et on a besoin d'une declaration de retour et qui retourne un objet
    data() {        
        return {
            products: window.products
        }
    },

    methods: {
        total() {
            var total = 0;
// littéralement, on fait référence au tableau products (this.products) ET POUR CHAQUE LIGNE (qu'on appelle ITEM), on execute une fonction anonyme qui dit que SI item.active est true/existe alors le prix de l'item x la qté de l'item se rajoute au total (soit à 0)
            this.products.forEach(function(item) {
                if (item.active) {
                    total += item.price * item.quantity;
                }
            });

            return total.toFixed(2);
        }
    }


};

// on a besoin de VueJs pour monter notre application et on peut le faire car on charge le script dans index.html. Comme argument, on passera l'objet créé (SelfServiceMachine)
//La méthode mount() sert à monter notre application et nous devons passer dans l'element html où sera notre application = besoin d'un element html parent soit le main qui a l'id "app"


Vue.createApp(SelfServiceMachine).mount('#app');