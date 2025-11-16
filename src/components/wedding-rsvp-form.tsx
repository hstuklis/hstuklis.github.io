import {useState, type FormEvent, type ChangeEvent} from "react";

const MIN_GUESTS = 1;
const MAX_GUESTS = 9;

interface FormDataState {
    name: string;
    phone: string;
    email: string;
    isAttending: 'yes' | 'no' | 'maybe';
    guests: number;
    dietary: string;
}

function WeddingRSVPForm() {
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        phone: '',
        email: '',
        isAttending: 'yes',
        guests: 1,
        dietary: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value === 'guests' ? parseInt(value, 10) : value
        }))
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Web3Forms Access Key check here.

        setIsSubmitting(true);
        setError(null);

        // Try-Catch submit payload to Web3Forms here.
        setIsSubmitted(true)

        setIsSubmitting(false);
    }

    if (isSubmitted) {
        return (
            <h2>Thank You!</h2>
        )
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h1 className="text-4xl font-bold text-center text-pink-600 mb-2">You're Invited!</h1>
            <p className="text-center text-gray-600 mb-8">Please RSVP by *RSVP Date Here*</p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name(s)</label>
                    <input
                        type="text" 
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel" 
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    />
                </div> 

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email" 
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    />
                </div> 

                <fieldset>
                    <legend className="text-sm font-medium text-gray-700 mb-2">You will be...</legend>
                    <ul role="listbox" className="bg-white rounded-md shadow-sm w-full border border-gray-300 focus-within:border-pink-500 overflow-hidden">
                        <li role="option" className="w-full border-b border-gray-300">
                            <label htmlFor="attending-yes" className="block text-sm text-gray-900 has-[:checked]:bg-pink-100 px-2 py-3">
                                <input
                                    type="radio" 
                                    name="isAttending"
                                    id="attending-yes"
                                    value="yes"
                                    checked={formData.isAttending === 'yes'}
                                    onChange={handleChange}
                                    required
                                    className="peer w-6 focus:outline-none"
                                />
                                <span className="ml-2">Joyfully Attending 🥳</span>
                            </label>
                        </li>
                        <li role="option" className="w-full border-b border-gray-300">
                            <label htmlFor="attending-maybe" className="block text-sm text-gray-900 has-[:checked]:bg-pink-100 px-2 py-3">
                                <input
                                    type="radio" 
                                    name="isAttending"
                                    id="attending-maybe"
                                    value="maybe"
                                    checked={formData.isAttending === 'maybe'}
                                    onChange={handleChange}
                                    required
                                    className="peer w-6 focus:outline-none"
                                />
                                <span className="ml-2">Tentatively Attending 🤞</span>
                            </label>
                        </li>
                        <li role="option" className="w-full">
                            <label htmlFor="attending-no" className="block text-sm text-gray-900 has-[:checked]:bg-pink-100 px-2 py-3">
                                <input
                                    type="radio" 
                                    name="isAttending"
                                    id="attending-no"
                                    value="no"
                                    checked={formData.isAttending === 'no'}
                                    onChange={handleChange}
                                    required
                                    className="peer w-6 focus:outline-none"
                                />
                                <span className="ml-2">Regretfully Declining 😔</span>
                            </label>
                        </li>
                    </ul>
                </fieldset>

                {(formData.isAttending === 'yes' || formData.isAttending === 'maybe') && (
                    <div className="space-y-6">
                       <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                            <input
                                type="number"
                                name="guests"
                                id="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                min={MIN_GUESTS} // Minimum allowed value
                                max={MAX_GUESTS} // Maximum allowed value
                                step="1"
                                maxLength={1}
                                inputMode="numeric"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div> 
                        <div>
                            <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">(Optional) Dietary Requirements</label>
                            <input
                                type="text" 
                                name="dietary"
                                id="dietary"
                                value={formData.dietary}
                                onChange={handleChange}
                                placeholder="e.g. Vegetarian, Gluten-Free, Nut Allergy"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            />
                        </div>
                    </div>
                )}

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                        </button>
                </div>

                {error && (
                    <p className="text-center text-red-600 text-sm mt-2">{error}</p>
                )}
            </form>
        </div>
    )
}

export default WeddingRSVPForm;