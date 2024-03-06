import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery"

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr />
      <MyGallery />
    </section>
  );
}