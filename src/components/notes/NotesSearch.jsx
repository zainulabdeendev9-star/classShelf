import React from 'react';
import { Button, Input, Select } from '../../ui';

const NotesSearch = ({
    searchText,
    category,
    fileType,
    categories,
    fileTypes,
    onSearchTextChange,
    onCategoryChange,
    onFileTypeChange,
    onReset,
}) => {
    return (
        <section className="bg-white rounded-3xl shadow-sm p-6 mb-10">
            <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_auto] items-end">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="notes-search">
                        Search Notes
                    </label>
                    <Input
                        id="notes-search"
                        type="text"
                        value={searchText}
                        onChange={(e) => onSearchTextChange(e.target.value)}
                        placeholder="Search by title, description, or subject"
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="category-filter">
                        Filter by Category
                    </label>
                    <Select
                        id="category-filter"
                        value={category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        options={categories.map((item) => ({ value: item, label: item }))}
                        placeholder="All Subjects"
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="filetype-filter">
                        Filter by File Type
                    </label>
                    <Select
                        id="filetype-filter"
                        value={fileType}
                        onChange={(e) => onFileTypeChange(e.target.value)}
                        options={fileTypes.map((item) => ({ value: item, label: item }))}
                        placeholder="All File Types"
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>
                <Button
                    type="button"
                    variant="outline"
                    onClick={onReset}
                    className="h-12"
                >
                    Reset
                </Button>
            </div>
        </section>
    );
};

export default NotesSearch;
