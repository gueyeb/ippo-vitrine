export const privacyPolicy = {
  title: 'Règles de confidentialité',
  lastUpdated: '22 février 2026',
  intro:
    'Ippo ("nous") exploite l\'application mobile Ippo (le "Service"). Cette page explique nos pratiques concernant la collecte, l\'utilisation et la protection des données lorsque vous utilisez le Service.',
  sections: [
    {
      heading: '1. Collecte et utilisation des informations',
      paragraphs: [
        'Ippo est conçu avec une approche "Privacy First". Nous considérons que vos données de marche et de bien-être sont personnelles et doivent rester sous votre contrôle.'
      ],
      items: [
        {
          title: 'a. Stockage local des données',
          bullets: [
            'Le nombre de pas, la distance, les coordonnées GPS (itinéraires), les horodatages de session, l\'humeur et les notes personnelles sont stockés exclusivement sur votre appareil.',
            'Nous ne transmettons pas ces données à des serveurs externes et nous n\'y avons pas accès.'
          ]
        },
        {
          title: 'b. Données de santé (Apple HealthKit / Google Health Connect)',
          bullets: [
            'Si vous accordez l\'autorisation, Ippo peut lire et/ou écrire des données dans Apple Health (iOS) ou Google Health Connect (Android).',
            'Cette utilisation sert uniquement à synchroniser vos sessions de marche avec vos données de santé et à améliorer la précision de certaines estimations.',
            'Le traitement est effectué localement sur votre appareil et reste soumis aux politiques de confidentialité d\'Apple ou de Google.'
          ]
        },
        {
          title: 'c. Données de localisation',
          bullets: [
            'Ippo a besoin d\'accéder à la localisation (y compris en arrière-plan) pour tracer votre itinéraire et calculer la distance parcourue.',
            'Ces données sont traitées localement et stockées uniquement sur votre appareil.',
            'L\'accès en arrière-plan est nécessaire pour continuer le suivi lorsque l\'écran est éteint ou lorsqu\'une autre application est ouverte.'
          ]
        }
      ]
    },
    {
      heading: '2. Partage et divulgation des données',
      paragraphs: [
        'Nous ne vendons pas, n\'échangeons pas et ne transférons pas vos données à des tiers. Puisque nous ne collectons pas vos données sur nos serveurs, il n\'y a pas de données à partager.'
      ]
    },
    {
      heading: '3. Conservation des données',
      paragraphs: ['Les données restent sur votre appareil tant que l\'application est installée. Vous pouvez les supprimer à tout moment en :'],
      ordered: [
        'supprimant des sessions individuelles depuis l\'historique de l\'application ;',
        'désinstallant l\'application (ce qui supprime la base locale).'
      ]
    },
    {
      heading: '4. Confidentialité des enfants',
      paragraphs: [
        'Le Service ne s\'adresse pas aux enfants de moins de 13 ans. Comme nous ne collectons pas de données sur nos serveurs, nous ne collectons pas sciemment d\'informations personnelles identifiables concernant des enfants.'
      ]
    },
    {
      heading: '5. Modifications de cette politique',
      paragraphs: [
        'Nous pouvons mettre à jour cette politique de confidentialité ponctuellement. Toute modification sera publiée sur cette page avec une mise à jour de la date indiquée ci-dessus.'
      ]
    },
    {
      heading: '6. Contact',
      paragraphs: [
        'Pour toute question concernant cette politique de confidentialité, contactez-nous à :',
        '[Votre adresse e-mail]'
      ]
    }
  ]
};
