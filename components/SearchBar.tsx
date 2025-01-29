'use client'
import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
const SearchBar = () => {
  return (
    <div>
       <Form action={"/search"} className="relative">
            <input type="text" name="q" placeholder='search for events...'
            className='w-full py-3 px-4 bg-white rounded-xl pl-12 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 focus:outline-none shadow-sm'
            />
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5'/>
            <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
       </Form>
    </div>
  )
}

export default SearchBar