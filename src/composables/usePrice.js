import { computed } from "vue"

export default function usePrice() {

    const priceProperty = computed((price) => {
        Number(price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'

        })

    })

    return {
        priceProperty

    }

}