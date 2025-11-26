# 🚀 GitHub Activity CLI

Una CLI (Command Line Interface) per visualizzare l'attività recente di qualsiasi utente GitHub direttamente dal terminale.

[Progetto Originale](https://roadmap.sh/projects/github-user-activity)

## 📋 Descrizione

GitHub Activity CLI è uno strumento da riga di comando che permette di recuperare e visualizzare rapidamente le attività pubbliche recenti di qualsiasi utente GitHub. Utilizza le API pubbliche di GitHub per ottenere gli eventi più recenti e li presenta in un formato leggibile e colorato.

## ✨ Caratteristiche

- 🔍 Recupera le ultime 5 attività pubbliche di un utente GitHub
- 🎨 Output colorato e formattato per una migliore leggibilità
- ⚡ Veloce e leggero
- 🛠️ Architettura modulare e manutenibile
- 📦 Facile da installare e utilizzare

## 🔧 Installazione

### Prerequisiti

- Node.js (versione 14 o superiore)
- npm o yarn

### Installazione locale

1. Clona il repository:

```bash
git clone https://github.com/FedericoLupoli/github-activity.git
cd github-activity
```

2. Installa le dipendenze:

```bash
npm install
```

3. Collega il comando globalmente:

```bash
npm link
```

## 🚀 Utilizzo

### Comandi disponibili

#### Visualizza l'attività di un utente

```bash
github-activity fetch <username>
```

**Esempio:**

```bash
github-activity fetch FedericoLupoli
```

**Output:**

```
🔄 Fetching GitHub activity for user: FedericoLupoli

Recent GitHub Activity for FedericoLupoli:

- PushEvent at 26/11/2025, 10:30:45
- CreateEvent at 25/11/2025, 15:20:12
- IssueCommentEvent at 24/11/2025, 09:45:33
- PullRequestEvent at 23/11/2025, 18:12:56
- WatchEvent at 22/11/2025, 14:05:22
```

#### Visualizza l'help

```bash
github-activity help
```

## 📁 Struttura del Progetto

```
github-activity/
├── bin/
│   └── index.js              # Entry point della CLI
├── src/
│   ├── commands/
│   │   ├── fetch.command.js  # Comando per recuperare l'attività
│   │   └── help.command.js   # Comando di aiuto
│   └── utils/
│       ├── github.api.js     # Gestione chiamate API GitHub
│       └── event.formatter.js # Formattazione e visualizzazione eventi
├── package.json
└── README.md
```

## 🏗️ Architettura

Il progetto segue i principi SOLID con una chiara separazione delle responsabilità:

- **Commands**: Orchestrano le operazioni e gestiscono l'input dell'utente
- **Utils/API**: Gestiscono le chiamate HTTP alle API di GitHub
- **Utils/Formatter**: Si occupano della formattazione e visualizzazione dei dati

## 🛠️ Tecnologie Utilizzate

- **Node.js**: Runtime JavaScript
- **Commander.js**: Parsing degli argomenti CLI
- **Chalk**: Styling colorato del terminale
- **GitHub REST API**: Per recuperare i dati degli utenti

## 📝 API di GitHub

Questo progetto utilizza l'endpoint pubblico di GitHub:

```
GET https://api.github.com/users/{username}/events/public
```

Non è richiesta alcuna autenticazione per visualizzare gli eventi pubblici.

## 🤝 Contribuire

I contributi sono benvenuti! Sentiti libero di:

1. Fare il fork del progetto
2. Creare un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committare le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pushare il branch (`git push origin feature/AmazingFeature`)
5. Aprire una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza ISC.

## 👤 Autore

**Federico Lupoli**

- GitHub: [@FedericoLupoli](https://github.com/FedericoLupoli)

## 🙏 Ringraziamenti

- [roadmap.sh](https://roadmap.sh) per l'idea del progetto
- La community di GitHub per le fantastiche API pubbliche

---

⭐ Se questo progetto ti è stato utile, lascia una stella su GitHub!
