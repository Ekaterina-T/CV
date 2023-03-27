const PERIOD = {
    years: 'years',
    months: 'months',
    days: 'days',
    hours: 'hours',
    minutes: 'mi'
}

const NOUN_CASE = {
    nominative: 'nominative',
    accusative: 'accusative',
    default: 'default'
}

const NOUN_CASE_VALUES = {
    [NOUN_CASE.nominative]: {
        [PERIOD.years]: 'год',
        [PERIOD.months]: 'месяц',
        [PERIOD.days]: 'день',
        [PERIOD.hours]: 'час',
        [PERIOD.minutes]: 'минута'
    },
    [NOUN_CASE.accusative]: {
        [PERIOD.years]: 'года',
        [PERIOD.months]: 'месяца',
        [PERIOD.days]: 'дня',
        [PERIOD.hours]: 'часа',
        [PERIOD.minutes]: 'минуты'
    },
    [NOUN_CASE.default]: {
        [PERIOD.years]: 'лет',
        [PERIOD.months]: 'месяцев',
        [PERIOD.days]: 'дней',
        [PERIOD.hours]: 'часов',
        [PERIOD.minutes]: 'минут'
    }
}

class Duration {
    start
    end

    constructor (start, end) {
        this.start = start
        this.end = end
    }

    /** Получить остаток времени отсчёта в виде количества дней, часов, минут */
    getHumanReadInterval () {
        let start = this.start.clone()

        const result = Object
            .keys(PERIOD)
            .map(key => {
                const value = this.end.diff(start, key)
                start.add(value, key)
                return value > 0 ? `${value} ${this.getWordPostfix(value, key)}` : null
            })
            .filter(el => el !== null)
            .join(' ')

        return result
    }

    /**
     * Возвращает подпись в днях, часах, минутах в нужном склонении
     */
    getWordPostfix (number, type) {
        const currentCase = this.defineCaseBy(number)
        return NOUN_CASE_VALUES[currentCase][type]
    }

    defineCaseBy(number) {
        const lastDigit = Number(String(number).charAt(String(number).length - 1))
        let currentCase = NOUN_CASE.default

        if (number === 1 || (number > 20 && lastDigit === 1)) {
            currentCase = NOUN_CASE.nominative
        } else if ((number > 1 && number < 5) || (number > 20 && lastDigit > 1 && lastDigit < 5)) {
            currentCase = NOUN_CASE.accusative
        }

        return currentCase
    }
}

export default Duration
