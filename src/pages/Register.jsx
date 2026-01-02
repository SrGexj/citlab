import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
    cleanDocument,
    calcularLetraDni,
    validarDocumento,
    validateFullname,
    validateEmail,
    validatePassword,
    validateLocation,
    validatePostalCode
} from '../utils/validators'

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}

const fadeUp = (delay = 0, minOpacity = 0.06) => ({
  hidden: { y: 12, opacity: minOpacity },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, delay } }
})

const fadeLeft = (delay = 0, minOpacity = 0.06) => ({
  hidden: { x: -18, opacity: minOpacity },
  show: { x: 0, opacity: 1, transition: { duration: 0.48, delay } }
})

const fadeRight = (delay = 0, minOpacity = 0.04) => ({
  hidden: { x: 18, opacity: minOpacity },
  show: { x: 0, opacity: 1, transition: { duration: 0.48, delay } }
})

export const Register = () => {

    // use react-hook-form to simplify validation and state
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' })

    useEffect(() => {
        document.title = "Registro - CitLabs"
    }, [])

    // react-hook-form validation wrappers (adapt utils -> RH expected true/msg)
    const rhValidateDocument = (v) => {
        const r = validarDocumento(v)
        return r.valid || r.msg || 'NIF/NIE inválido'
    }
    const rhValidateFullname = (v) => {
        const r = validateFullname(v)
        return r.valid || r.msg
    }
    const rhValidateEmail = (v) => {
        const r = validateEmail(v)
        return r.valid || r.msg
    }
    const rhValidatePassword = (v) => {
        const r = validatePassword(v)
        return r.valid || r.msg
    }
    const rhValidateLocation = (v) => {
        const r = validateLocation(v)
        return r.valid || r.msg
    }
    const rhValidatePostalCode = (v) => {
        const r = validatePostalCode(v)
        return r.valid || r.msg
    }

    const onSubmitRH = (data) => {
        // data contains validated fields
        console.log('Enviar formulario de registro', data)
    }

    return (
        <div className="flex items-center justify-center max-h-screen bg-gray-100 overflow-hidden!">
            <motion.div className="flex-1 mb-4 h-screen flex flex-col items-center justify-between " initial="hidden" animate="show" variants={containerVariant}>
                <motion.div className="pt-20 h-[33%] w-full flex gap-2 max-w-sm" variants={fadeUp(0)}>
                    <motion.img src="/images/dip_badajoz.png" alt="" className="w-full h-[65px] object-contain" variants={fadeUp(0.02)} initial="hidden" animate="show"/>
                    <motion.img src="/images/citlabs_logo.png" alt="" className="w-full h-[65px] object-contain" variants={fadeUp(0.08)} initial="hidden" animate="show"/>
                    <motion.img src="/images/ods.png" alt="" className="w-full h-[65px] object-contain" variants={fadeUp(0.14)} initial="hidden" animate="show"/>
                </motion.div>

                <motion.div className="flex flex-col w-full items-center justify-center h-fit" variants={fadeLeft(0.04)}>
                    <motion.h2 className="text-[35px] font-medium" variants={fadeLeft(0.06)}>
                        Formulario de <span className="text-[#D11111]">registro</span>
                    </motion.h2>
                    <motion.form className="p-6 w-full max-w-lg" variants={fadeLeft(0.12)} onSubmit={handleSubmit(onSubmitRH)}>
                        <div className="flex gap-2 pb-3">
                            <motion.div className="w-full flex flex-col gap-2" variants={fadeLeft(0.14)}>
                                <label className="text-neutral-700 text-sm" htmlFor="fullname">
                                    Nombre completo
                                </label>
                                <motion.input
                                    id="fullname"
                                    {...register('fullname', { validate: rhValidateFullname })}
                                    type="text"
                                    className="appearance-none bg-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    variants={fadeLeft(0.16)}
                                />
                                {errors.fullname && <p className="text-xs text-red-600 mt-1">{errors.fullname.message}</p>}
                            </motion.div>
                            <motion.div className="w-full flex flex-col gap-2" variants={fadeLeft(0.14)}>
                                <label className="text-neutral-700 text-sm" htmlFor="document">
                                    NIF/NIE
                                </label>
                                    <motion.input
                                        id="document"
                                        {...register('document', { validate: rhValidateDocument })}
                                        type="text"
                                        placeholder="12345678A o X1234567L"
                                        className="appearance-none bg-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        variants={fadeLeft(0.16)}
                                    />
                                    {errors.document && <p className="text-xs text-red-600 mt-1">{errors.document.message}</p>}
                            </motion.div>
                        </div>
                       <div className="flex flex-col gap-2 pb-3"> 
                            <label className="text-neutral-700 text-sm" htmlFor="email">
                                Correo electrónico
                            </label>
                            <motion.input
                                id="email"
                                {...register('email', { validate: rhValidateEmail })}
                                type="email"
                                className="appearance-none bg-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                variants={fadeLeft(0.16)}
                            />
                            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="flex gap-2 pb-3">
                            <motion.div className="w-full flex flex-col gap-2" variants={fadeLeft(0.14)}>
                                <label className="text-neutral-700 text-sm" htmlFor="location">
                                    Localidad
                                </label>
                                <motion.input
                                    id="location"
                                    {...register('location', { validate: rhValidateLocation })}
                                    type="text"
                                    className="appearance-none bg-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    variants={fadeLeft(0.16)}
                                />
                                {errors.location && <p className="text-xs text-red-600 mt-1">{errors.location.message}</p>}
                            </motion.div>
                            <motion.div className="w-full flex flex-col gap-2" variants={fadeLeft(0.14)}>
                                <label className="text-neutral-700 text-sm" htmlFor="postalCode">
                                    Código postal
                                </label>
                                <motion.input
                                    id="postalCode"
                                    {...register('postalCode', { validate: rhValidatePostalCode })}
                                    type="text"
                                    className="appearance-none bg-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    variants={fadeLeft(0.16)}
                                />
                                {errors.postalCode && <p className="text-xs text-red-600 mt-1">{errors.postalCode.message}</p>}
                            </motion.div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-neutral-700 text-sm" htmlFor="password">
                                Password
                            </label>
                            <motion.input id="password" {...register('password', { validate: rhValidatePassword })} type="password" className="appearance-none bg-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" variants={fadeLeft(0.18)} />
                            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
                        </div>
                        <motion.div className="flex items-center justify-between mt-4" variants={fadeLeft(0.22)}>
                            <motion.button type="submit" disabled={!isValid} className={`bg-[#D11111] ${isValid ? 'hover:bg-[#9e0e0e]' : 'opacity-60 cursor-not-allowed'} text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition-color duration-200`} variants={fadeLeft(0.24)}>
                                Crear Cuenta
                            </motion.button>
                        </motion.div>
                    </motion.form>

                    <motion.a href="/" className="text-sm text-neutral-500 flex gap-1 items-center hover:text-[#d11111] transition-colors" variants={fadeLeft(0.26)}>
                        <ArrowLeft className="inline-block ml-1 w-[15px]" />
                        Volver al inicio
                    </motion.a>
                </motion.div>

                <motion.div className="flex flex-col items-center justify-end pb-1 h-[33%] w-full px-10" variants={fadeUp(0.22)}>
                    <motion.p className="text-sm text-neutral-500 border-b border-neutral-300 w-full text-center mb-3 pb-2" variants={fadeUp(0.24)}>
                        ¿Ya tienes una cuenta? <a href="/login" className="text-[#D11111] hover:underline">Inicia sesión</a>
                    </motion.p>
                    <motion.ul className="list-none flex gap-2 text-[12px] text-neutral-400" variants={fadeUp(0.26)}>
                        <motion.li variants={fadeUp(0.28)}><a href="#" className=" hover:underline">Términos de servicio</a></motion.li>
                        <motion.li variants={fadeUp(0.3)}><a href="#" className=" hover:underline">Privacidad</a></motion.li>
                        <motion.li variants={fadeUp(0.32)}><a href="#" className=" hover:underline">Acuerdo de usuario</a></motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>

            <motion.div className="relative flex-2 h-screen bg-white flex items-center justify-center" initial={{ opacity: 0.04 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.12 }}>
                <motion.div className="absolute w-[95%] h-fit before:absolute before:w-full before:h-full before:top-0 before:left-0 overflow-hidden before:mix-blend-overlay before:bg-white/20 before:backdrop-blur-[5px] before:border-2 before:border-white/40 flex gap-2 items-start bottom-5 rounded-[30px] before:rounded-[30px] p-[15px] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-[30px] after:bg-white/17" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div className="relative z-1 flex gap-2">
                        <span className="bg-white text-[#d11111] w-[35px] h-[35px] aspect-square text-[22px] flex items-center justify-center rounded-full">i</span>
                        <motion.h3 className="text-[22px] text-white" initial={{ opacity: 0.04 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.22 }}>
                            Un CITLab es un lugar para el aprendizaje y la innovación, donde experimentar, crear, asesorar e inventar. Estos espacios brindan a sus usuarios acceso al entorno, las habilidades, los materiales y la tecnología avanzada que permiten que cualquier persona, en cualquier lugar, fabrique (casi*) cualquier cosa a través de dos movimientos sociotecnológicos.
                        </motion.h3>
                    </div>
                </motion.div>
                <motion.img src="/images/login_placeholder.png" alt="Placeholder" className="w-full h-full object-cover pointer-events-none" initial={{ scale: 1.01, opacity: 0.04 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.18 }} />
            </motion.div>
        </div>
    )
}