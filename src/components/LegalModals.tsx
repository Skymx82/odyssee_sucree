'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LegalModals() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (['mentions-legales', 'cgv', 'confidentialite', 'cookies'].includes(hash)) {
        setActiveModal(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeModal = () => {
    setActiveModal(null);
    window.location.hash = '';
  };

  if (!activeModal) return null;

  const modals = {
    'mentions-legales': {
      title: 'Mentions Légales',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Éditeur du site</h3>
            <p><strong>Raison sociale :</strong> Odyssée Sucrée</p>
            <p><strong>Statut juridique :</strong> Auto-entrepreneur</p>
            <p><strong>SIRET :</strong> 938 763 752 00012</p>
            <p><strong>Responsable de publication :</strong> Aurore</p>
            <p><strong>Adresse :</strong> 101 Route de l'Honor de Cos, 82220 Puycornet</p>
            <p><strong>Email :</strong> odysseesucree82@gmail.com</p>
            <p><strong>Téléphone :</strong> 06 34 84 91 82</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Hébergement</h3>
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener" className="text-[#9B7AB8] hover:underline">vercel.com</a></p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Propriété intellectuelle</h3>
            <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive d'Odyssée Sucrée. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Données personnelles</h3>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à odysseesucree82@gmail.com</p>
          </section>
        </div>
      ),
    },
    'cgv': {
      title: 'Conditions Générales de Vente',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 1 - Objet</h3>
            <p>Les présentes conditions générales de vente régissent les relations contractuelles entre Odyssée Sucrée et ses clients dans le cadre de la vente de pâtisseries artisanales sur mesure.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 2 - Commandes</h3>
            <p>Les commandes se font sur devis après échange avec le client. Un acompte de 30% est demandé à la validation de la commande. Le solde est à régler à la livraison ou au retrait.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 3 - Prix</h3>
            <p>Les prix sont indiqués en euros TTC. Ils sont valables au jour de la commande et peuvent être modifiés à tout moment.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 4 - Délais</h3>
            <p>Les délais de réalisation sont communiqués lors de la commande. Un délai minimum de 7 jours est généralement nécessaire pour les créations sur mesure.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 5 - Annulation</h3>
            <p>Toute annulation moins de 48h avant la date prévue entraîne la perte de l'acompte versé. Au-delà de ce délai, l'acompte est remboursable à 50%.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 6 - Allergènes</h3>
            <p>Nos produits peuvent contenir des allergènes (gluten, œufs, lait, fruits à coque). Merci de nous signaler toute allergie lors de votre commande.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 7 - Conservation</h3>
            <p>Les produits frais doivent être conservés au réfrigérateur et consommés dans les 48h suivant la livraison.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Article 8 - Réclamations</h3>
            <p>Toute réclamation doit être formulée dans les 24h suivant la livraison par email à odysseesucree82@gmail.com</p>
          </section>
        </div>
      ),
    },
    'confidentialite': {
      title: 'Politique de Confidentialité',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Collecte des données</h3>
            <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Date de l'événement</li>
              <li>Type d'événement</li>
              <li>Message</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Utilisation des données</h3>
            <p>Vos données sont utilisées uniquement pour :</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Répondre à vos demandes de devis</li>
              <li>Gérer vos commandes</li>
              <li>Vous contacter concernant votre projet</li>
            </ul>
            <p className="mt-4">Nous ne vendons ni ne partageons vos données avec des tiers.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Durée de conservation</h3>
            <p>Vos données sont conservées pendant 3 ans maximum à compter de notre dernier contact, sauf obligation légale contraire.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Vos droits (RGPD)</h3>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données</li>
            </ul>
            <p className="mt-4">Pour exercer ces droits, contactez-nous à : <a href="mailto:odysseesucree82@gmail.com" className="text-[#9B7AB8] hover:underline">odysseesucree82@gmail.com</a></p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Sécurité</h3>
            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Contact DPO</h3>
            <p>Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter à odysseesucree82@gmail.com</p>
          </section>
        </div>
      ),
    },
    'cookies': {
      title: 'Politique des Cookies',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Qu'est-ce qu'un cookie ?</h3>
            <p>Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site web. Il permet de mémoriser des informations sur votre navigation.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Cookies utilisés sur ce site</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2D2D2D]">Cookies essentiels</h4>
                <p className="text-sm text-gray-600">Ces cookies sont nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.</p>
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Cookies de session</li>
                  <li>Cookies de sécurité</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#2D2D2D]">Cookies analytiques (optionnels)</h4>
                <p className="text-sm text-gray-600">Ces cookies nous aident à comprendre comment vous utilisez le site pour l'améliorer.</p>
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Google Analytics (si configuré)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Gestion des cookies</h3>
            <p>Vous pouvez à tout moment désactiver les cookies depuis les paramètres de votre navigateur :</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
              <li><strong>Edge :</strong> Paramètres → Confidentialité → Cookies</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Durée de conservation</h3>
            <p>Les cookies sont conservés pour une durée maximale de 13 mois.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-[#9B7AB8]">Contact</h3>
            <p>Pour toute question sur notre politique de cookies, contactez-nous à odysseesucree82@gmail.com</p>
          </section>
        </div>
      ),
    },
  };

  const modal = modals[activeModal as keyof typeof modals];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FADADD] to-[#D8C7E8] px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]">{modal.title}</h2>
          <button
            onClick={closeModal}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6 text-[#2D2D2D]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(90vh-120px)] text-[#2D2D2D]">
          {modal.content}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-200 flex justify-end">
          <Button
            onClick={closeModal}
            size="lg"
            className="rounded-full px-8"
          >
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
}
