# Configuration de Resend pour le formulaire de contact

## Étapes pour configurer l'envoi d'emails

### 1. Créer un compte Resend (GRATUIT)
- Va sur [resend.com](https://resend.com)
- Crée un compte gratuit (pas de carte bancaire nécessaire)
- Tu as **100 emails gratuits par jour** !

### 2. Obtenir ta clé API
- Une fois connecté, va dans "API Keys"
- Clique sur "Create API Key"
- Copie la clé qui commence par `re_...`

### 3. Ajouter la clé dans ton projet
- Crée un fichier `.env.local` à la racine du projet
- Ajoute cette ligne :
```
RESEND_API_KEY=ta_clé_ici
```

### 4. C'est tout !
Le formulaire de contact fonctionnera automatiquement et enverra les emails à **odysseesucree82@gmail.com**

## Exemple de fichier .env.local
```
RESEND_API_KEY=re_123456789abcdefghijklmnop
```

## Note importante
- **NE PARTAGE JAMAIS** ta clé API publiquement
- Le fichier `.env.local` est déjà dans `.gitignore` donc il ne sera pas envoyé sur GitHub
- Pour la production (déploiement), ajoute la clé dans les variables d'environnement de ton hébergeur

## Personnalisation
Si tu veux changer l'adresse email de réception, modifie le fichier :
`src/app/api/contact/route.ts` ligne 13
