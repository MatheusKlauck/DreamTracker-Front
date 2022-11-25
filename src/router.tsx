import { Routes, Route } from 'react-router-dom'
import { Feed } from './pages/Feed'
import { DefaultLayout } from './pages/layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/" element={<Feed />} />
            </Route>
        </Routes>
    )
}