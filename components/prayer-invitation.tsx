"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Sparkles, Star } from "lucide-react"

export function PrayerInvitation() {
  const [showResponse, setShowResponse] = useState(false)
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null)

  const handleYes = () => {
    setAnswer("yes")
    setShowResponse(true)
  }

  const handleNo = () => {
    setAnswer("no")
    setShowResponse(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Star className="w-8 h-8 text-accent/30" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <Sparkles className="w-6 h-6 text-primary/30" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float animation-delay-4000">
          <Heart className="w-10 h-10 text-accent/20" fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float animation-delay-1000">
          <Star className="w-6 h-6 text-secondary/40" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-3000">
          <Sparkles className="w-8 h-8 text-accent/30" />
        </div>
      </div>

      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>

        {!showResponse ? (
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Heart className="w-20 h-20 text-primary animate-pulse" fill="currentColor" />
                  <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 animate-spin-slow" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Um Convite Especial
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">Oi! 😊</p>
            </div>

            <div className="space-y-4 text-lg md:text-xl text-foreground/90 leading-relaxed">
              <p className="text-pretty">Eu estava pensando aqui... e sabe o que seria muito legal?</p>

              <p className="text-pretty font-semibold text-primary text-2xl">Se a gente pudesse orar juntos! 🙏</p>

              <p className="text-pretty">
                Acredito que quando duas pessoas se unem em oração, coisas incríveis acontecem. E eu adoraria
                compartilhar esse momento especial com você.
              </p>

              <div className="my-8 p-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-primary/20 shadow-inner">
                <p className="text-pretty font-serif italic text-foreground text-xl md:text-2xl leading-relaxed mb-2">
                  "Porque onde estiverem dois ou três reunidos em meu nome, ali estou eu no meio deles."
                </p>
                <p className="text-sm text-muted-foreground mt-4 text-right font-medium">— Mateus 18:20</p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <p className="text-base text-foreground/80 text-pretty leading-relaxed">
                    Imagina só... quando oramos juntos, Ele está bem ali, no meio da gente. Que privilégio seria esse!
                    ✨
                  </p>
                </div>
              </div>

              <p className="text-pretty text-muted-foreground italic">Então... o que você acha? 💭</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                onClick={handleYes}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Sim! Vamos orar juntos! 🎉
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleNo}
                className="text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Talvez outra hora... 🤔
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center animate-fade-in">
            {answer === "yes" ? (
              <>
                <div className="flex justify-center mb-6">
                  <div className="relative animate-bounce-slow">
                    <Heart className="w-24 h-24 text-accent" fill="currentColor" />
                    <Sparkles className="w-10 h-10 text-primary absolute -top-3 -right-3 animate-spin-slow" />
                    <Star
                      className="w-8 h-8 text-secondary absolute -bottom-2 -left-2 animate-pulse"
                      fill="currentColor"
                    />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Que alegria! 🎊</h2>

                <div className="space-y-4 text-lg md:text-xl text-foreground/90 leading-relaxed">
                  <p className="text-pretty">Você não sabe o quanto isso significa pra mim! ❤️</p>

                  <p className="text-pretty font-semibold text-accent text-2xl">Vamos fazer isso acontecer!</p>

                  <p className="text-pretty">
                    Pode ser pessoalmente, por chamada de vídeo, ou da forma que você preferir. O importante é estarmos
                    juntos nesse momento de conexão. 🌟
                  </p>

                  <p className="text-pretty text-muted-foreground italic">
                    Me avisa quando você estiver disponível! 😊
                  </p>
                </div>

                <Button size="lg" onClick={() => setShowResponse(false)} className="mt-6 bg-accent hover:bg-accent/90">
                  Voltar
                </Button>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-6">
                  <Heart className="w-20 h-20 text-muted-foreground/50" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground text-balance">Tudo bem! 😊</h2>

                <div className="space-y-4 text-lg md:text-xl text-foreground/80 leading-relaxed">
                  <p className="text-pretty">Sem pressão! A porta está sempre aberta. 🚪</p>

                  <p className="text-pretty">Quando você quiser, é só me chamar. Vai ser um prazer orar com você! 💫</p>
                </div>

                <Button size="lg" onClick={() => setShowResponse(false)} variant="outline" className="mt-6">
                  Voltar
                </Button>
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}
