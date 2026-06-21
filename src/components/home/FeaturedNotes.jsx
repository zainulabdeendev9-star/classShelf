import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../features/notes/notesSlice';
import NotesGrid from '../notes/NotesGrid';
import { Button } from '../../ui';
import { LuArrowRight, LuSparkles } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const FeaturedNotes = () => {
    const dispatch = useDispatch();
    const { notes, status, error } = useSelector((state) => state.notes);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNotes());
        }
    }, [dispatch, status]);

    const featuredNotes = notes.slice(0, 6).reverse();

    if (status === 'loading') {
        return (
            <section className="bg-slate-50 px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured notes</p>
                        <h2 className="mt-3 text-4xl font-bold text-slate-900">Trending resources</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(6)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="overflow-hidden rounded-3xl bg-white shadow-sm"
                            >
                                <div className="h-48 animate-pulse bg-slate-200" />
                                <div className="space-y-3 p-5">
                                    <div className="h-4 animate-pulse rounded bg-slate-200" />
                                    <div className="h-3 animate-pulse rounded bg-slate-200" />
                                    <div className="h-3 w-3/4 animate-pulse rounded bg-slate-200" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (status === 'failed') {
        return (
            <section className="bg-slate-50 px-6 py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured notes</p>
                    <h2 className="mt-3 text-4xl font-bold text-slate-900">Trending resources</h2>
                    <p className="mt-4 text-red-600">Error loading featured notes: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-slate-50 px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="mb-12 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4 }}
                >
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Featured notes</p>
                        <h2 className="mt-3 text-4xl font-bold text-slate-900">Trending resources</h2>
                    </div>
                    <motion.div
                        className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <LuSparkles size={16} />
                        Popular this week
                    </motion.div>
                </motion.div>

                <NotesGrid notes={featuredNotes} />

                {featuredNotes.length > 0 && (
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Button
                            as={Link}
                            to="/notes"
                            className="inline-flex items-center gap-2"
                        >
                            View All Notes
                            <LuArrowRight size={18} />
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default FeaturedNotes;