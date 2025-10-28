export const registerUser = async (user) => {
    try {
        const req = await fetch(
            "https://kitek.ktkv.dev/marketplace/api/auth/register",
            {
                method: "POST",
                body: user,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const loginUser = async (user) => {
    try {
        const req = await fetch(
            "https://kitek.ktkv.dev/marketplace/api/auth/login",
            {
                method: "POST",
                body: user,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const collectItem = async ()

//https://kitek.ktkv.dev/marketplace/