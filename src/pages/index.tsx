import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white p-6 md:p-12">
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-sky-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Prépare ton SAT ou ACT avec un coach expert 🇫🇷📘
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Une méthode unique pensée pour les élèves français qui visent un bachelor scientifique aux États-Unis
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl">Réserver un appel gratuit</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Méthode 100% personnalisée</h3>
            <p className="text-gray-600">
              Diagnostic initial, plan de travail adapté, progression en temps réel. On s'adapte à ton profil et ton rythme !
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Focus Sciences & Maths</h3>
            <p className="text-gray-600">
              Entraînement spécifique pour les élèves visant les STEM : raisonnement scientifique, logique, data analysis, etc.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Culture test & mindset</h3>
            <p className="text-gray-600">
              Familiarise-toi avec les codes anglo-saxons, développe ton aisance mentale et ta gestion du temps le jour J !
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-sky-800 text-center">À propos</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Je suis un tuteur passionné par l’enseignement et les cultures éducatives internationales. J’aide les élèves français à réussir leur SAT ou ACT grâce à une approche structurée, bienveillante et 100% adaptée au système anglo-saxon. Mon objectif : t’amener à intégrer une université américaine de premier plan en sciences !
        </p>
      </section>

      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-sky-800 text-center">Témoignages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <p className="text-gray-700 italic">“Grâce à cette préparation, j’ai progressé de 180 points en 6 semaines. La méthode est claire, rigoureuse et motivante.”</p>
              <p className="mt-2 font-semibold">— Emma, admise à UC Berkeley</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <p className="text-gray-700 italic">“J’ai pu comprendre les pièges du test ACT et apprendre à gérer mon stress. Les sessions sont dynamiques et bien construites.”</p>
              <p className="mt-2 font-semibold">— Théo, futur étudiant en ingénierie</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-sky-800">Vidéo de présentation</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full rounded-xl shadow-md"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Présentation de la méthode SAT ACT"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mt-20 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-sky-800 text-center">Contacte-moi</h2>
        <form className="space-y-4">
          <Input placeholder="Ton prénom" />
          <Input placeholder="Ton e-mail" type="email" />
          <Textarea placeholder="Parle-moi de ton projet d'études 🎓" rows={4} />
          <Button className="w-full">Envoyer le message</Button>
        </form>
      </section>

      <section className="mt-20 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-sky-800">Réserver une séance</h2>
        <p className="text-gray-600 mb-4">Choisis ton créneau et réserve en quelques clics !</p>
        <iframe
          src="https://calendly.com/votre-lien"
          className="w-full h-[600px] rounded-xl shadow"
          frameBorder="0"
        ></iframe>
      </section>
    </main>
  );
}
