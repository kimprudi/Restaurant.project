<template>
     <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
<v-container>
    <v-card class="mx-auto" elevation="24">
        <v-container>
        <v-row>
            <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
                <v-card>
                    <v-card color="#630815">
                        <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                        </v-card-item>
                        <v-img height="200px" src="https://img.freepik.com/free-vector/breakfast-food-characters-with-cute-faces-funny-pancake-bacon-bottle-milk-apple-cookie-cup-coffee-toast-drinks-white-background-healthy-food-meal-cartoon-illustration-set-concept_74855-22961.jpg?ga=GA1.1.664485313.1740032749&semt=ais_hybrid" cover ></v-img>

                        <v-card-text>
                        {{item.price}}
                        </v-card-text>
                       </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
 </v-container>
 </template>
    
    <script setup>
    const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    }
]

    
    </script>