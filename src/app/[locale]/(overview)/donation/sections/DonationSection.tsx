import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function DonationSection() {
    // Data for donation methods
    const donationMethods = [
    {
      title: "Transfert Electronique, Interac",
      description: "Depot direct : donation@hforlife-hpourlavie.ca",
    },
    {
      title: 'Chèque à l\'ordre de "Habitation pour la Vie, Inc."',
      description:
        "Envoyer le chèque à cet adresse : \n305, avenue Dominion, Moncton, NB",
    },
    {
      title: "Virement bancaire",
      description:
        "Nom du compte : Habitation pour la Vie, Inc.\nNuméro IBAN : 75272 2818 RR0001",
    },
    {
      title: "Dons en nature (matériaux, services professionnels)",
      description:
        "Contactez-nous directement via cet adresse pour faire votre don : donation@hforlife-hpourlavie.ca",
    },
    ];
    return (
        <div className='grid grid-cols-12 max-width space-y-10 md:space-y-0 lg:gap-20 my-14 md:my-32'>
            {/** grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-width gap-10 lg:gap-20 my-14 md:my-32*/}
            {/* Donation Form Card */}
            <Card className="w-full col-span-full lg:col-span-5 h-min rounded-2xl border border-neutral-200">
                <CardContent className="w-full p-6">
                    <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)] mb-8">
                        Effectuez le don
                    </h3>

                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex flex-col gap-3">
                            <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                Votre adresse email
                            </label>
                            <Input
                                className="h-[50px] bg-[#f0f0ee] rounded-xl"
                                placeholder="Votre adresse email"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                Montant du don
                            </label>
                            <Input
                                className="h-[50px] bg-[#f0f0ee] rounded-xl"
                                placeholder="Combien donnez-vous ?"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                Votre numéro de carte bancaire
                            </label>
                            <Input
                                className="h-[50px] bg-[#f0f0ee] rounded-xl"
                                placeholder="XXXX  XXXX  XXXX  XXXX"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex flex-col gap-3">
                                <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                    Date expiratoire
                                </label>
                                <Input
                                    className="h-[50px] bg-[#f0f0ee] rounded-xl"
                                    placeholder="MM/YY"
                                />
                            </div>

                            <div className="w-full md:w-[154px] flex flex-col gap-3">
                                <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                    CVC
                                </label>
                                <Input
                                    className="h-[50px] bg-[#f0f0ee] rounded-xl"
                                    placeholder="CVC"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <Checkbox
                            id="transaction-fees"
                            className="rounded border-[#d3d2d2]"
                        />
                        <label
                            htmlFor="transaction-fees"
                            className="font-paragraph-2 text-sm leading-[22.4px]"
                        >
                            Payer les frais de transaction{" "}
                            <span className="font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] font-paragraph-2 [font-style:var(--paragraph-2-font-style)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                                (montant des frais ici)
                            </span>
                    </label>
                    </div>

                    <Button className="w-full h-[50px] bg-green rounded-xl text-white font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                        Effectuer le don
                    </Button>
                </CardContent>
            </Card>
            
            {/* Alternative Donation Methods */}
            <div className="w-full flex flex-col col-span-full lg:col-span-6 gap-6">
                <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                    Ou donnez à votre manière.
                </h3>

                <div className="flex flex-col gap-3">
                    {donationMethods.map((method, index) => (
                        <Card key={index} className="bg-[#f6f6ee] rounded-xl border-none shadow-none">
                            <CardContent className="p-5">
                                <div className="flex flex-col gap-3">
                                    <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                        {method.title}
                                    </h4>
                                    <p className="font-paragraph-2 text-[#504f48] whitespace-pre-line">
                                        {method.description.split(":")[0]}:{" "}
                                    <span className="text-[#282724]">
                                        {method.description.split(":").slice(1).join(":")}
                                    </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <p className="font-paragraph-2 text-[#504f48] leading-[var(--paragraph-2-line-height)]">
                    Tous les dons sont déductibles d&apos;impôts. Un reçu officiel vous
                    sera envoyé. Numéro d&apos;enregistrement de l&apos;organisme :{" "}
                    <span className="text-[#282724]">75272 2818 RR0001</span>
                </p>

                <Separator className="bg-gray/20" />

                <div className="flex flex-col gap-2">
                        <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                            Pour obtenir plus d&apos;informations sur la façon dont vous
                            pouvez faire un don contactez :
                        </h4>
                        <p className="font-paragraph-2 text-gray leading-[var(--paragraph-2-line-height)]">
                            Secrétaire -trésorière : Aurea cormier, tel : 5068540675
                        <br />
                            Assistante Administrative : Rhada El Khadir, tel : 5068540675
                        </p>
                </div>
            </div> 
        </div>
    )
}
