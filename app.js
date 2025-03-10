// const fs = require("fs");
// const path = require("path");
// const readline = require("readline");

// const filePath = path.join(__dirname, "tasks.json");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Charger les tâches depuis le fichier JSON
// const loadTasks = (callback) => {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         // Si le fichier n'existe pas, initialiser avec un tableau vide
//         callback([]);
//       } else {
//         console.error("Erreur lors de la lecture du fichier :", err);
//         callback([]);
//       }
//     } else {
//       callback(JSON.parse(data));
//     }
//   });
// };

// // Sauvegarder les tâches dans le fichier JSON
// const saveTasks = (tasks, callback) => {
//   fs.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf8", (err) => {
//     if (err) {
//       console.error("Erreur lors de l'écriture du fichier :", err);
//     } else {
//       callback();
//     }
//   });
// };

// // Afficher le menu
// const showMenu = () => {
//   console.log("\n=== Gestion des tâches ===");
//   console.log("1. Afficher les tâches");
//   console.log("2. Ajouter une tâche");
//   console.log("3. Mettre à jour une tâche");
//   console.log("4. Supprimer une tâche");
//   rl.question("Choisissez une option : ", handleMenuChoice);
// };

// // Gérer le choix de l'utilisateur
// const handleMenuChoice = (choice) => {
//   const numberOfAction = {
//     1: showTasks,
//     2: addTask,
//     3: updateTask,
//     4: deleteTask,
//   };

//   return numberOfAction[choice]();
// };

// // Afficher toutes les tâches
// const showTasks = () => {
//   loadTasks((tasks) => {
//     console.log("\n=== Liste des tâches ===");
//     tasks.forEach((task) => {
//       console.log(`[${task.completed ? "X" : " "}] ${task.id}: ${task.title}`);
//     });
//     showMenu();
//   });
// };

// // Ajouter une tâche
// const addTask = () => {
//   rl.question("Entrez le titre de la tâche : ", (title) => {
//     loadTasks((tasks) => {
//       const newTask = {
//         id: Date.now(), // Utilise un timestamp comme ID
//         title,
//         completed: false,
//       };
//       tasks.push(newTask);
//       saveTasks(tasks, () => {
//         console.log("Tâche ajoutée avec succès !");
//         showMenu();
//       });
//     });
//   });
// };

// // Mettre à jour une tâche
// const updateTask = () => {
//   rl.question("Entrez l'ID de la tâche à mettre à jour : ", (id) => {
//     loadTasks((tasks) => {
//       const task = tasks.find((t) => t.$^$id === Number(id));
//       if (task) {
//         rl.question(
//           "Nouveau titre (laissez vide pour ne pas changer) : ",
//           (title) => {
//             if (title) task.title = title;
//             rl.question(
//               "Marquer comme terminée ? (oui/non) : ",
//               (completed) => {
//                 if (completed.toLowerCase() === "oui") task.completed = true;
//                 saveTasks(tasks, () => {
//                   console.log("Tâche mise à jour avec succès !");
//                   showMenu();
//                 });
//               }
//             );
//           }
//         );
//       } else {
//         console.log("Tâche non trouvée.");
//         showMenu();
//       }
//     });
//   });
// };

// // Supprimer une tâche
// const deleteTask = () => {
//   rl.question("Entrez l'ID de la tâche à supprimer : ", (id) => {
//     loadTasks((tasks) => {
//       const initialLength = tasks.length;
//       tasks = tasks.filter((t) => t.id !== +id);
//       if (tasks.length < initialLength) {
//         saveTasks(tasks, () => {
//           console.log("Tâche supprimée avec succès !");
//           showMenu();
//         });
//       } else {
//         console.log("Tâche non trouvée.");
//         showMenu();
//       }
//     });
//   });
// };

// // Démarrer l'application
// showMenu();

// un restaurent organise une soirée spéciale et annonce une promotion à ses clients
//

const EventEmitter = require("events");

const instanceEvent = new EventEmitter();

// instanceEvent.on('open', (msg) => {
//   console.log("Le restaurant organise une soirée spéciale :", msg);
// });

// instanceEvent.emit('open', "PAF");

// dans un restaurent, quand un client commande:
// le serveur prend la commande
// le chef prepare le plat
// le serveur sert le plat
// instanceEvent.on('commande', (plat) => {
//   console.log("Le chef prepare le plat", plat);
//   instanceEvent.emit('prepare');

// });

// instanceEvent.on('prepare', (plat) => {
//   console.log("Le serveur sert le plat");
//   instanceEvent.emit('servir', plat);
// });

// instanceEvent.on("servir", () =>{
//   console.log("Le client recoit son plat");
// })

// instanceEvent.emit('commande', "PAF");

// ecrivez une founction nommée commanderplat
// cette fonction s'attend à recevoir un parametre leplat
// mettez en evidence les etat de livraison du plat avec les promises

// const commanderplat = (plat) => {
//   return new Promise((result, reject) => {
//     if (plat === "viande") {
//       return result();
//     } else {
//       return reject();
//     }
//   });
// };

// const verifieCommande = async(plat) => {
//   try {
//     await commanderplat(plat);
//     console.log("C'est le bon plat");
//   } catch (error) {
//     console.log("c'est pas le bon plat'");
//   }
// }

// verifieCommande("viande");

const HTTP = require("http");

const server = HTTP.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Bievenue sur mon serveur node");
  } else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end("Requete invalide");
  }
});

server.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});

// exercice
// 400 dire au navigateur quand il y a une erreur
// 200 quand c'est une erreur
