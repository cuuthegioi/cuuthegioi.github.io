import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { MdLanguage, MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
                  <div className="p-8 h-full w-full flex flex-col">
          <div className="flex-1">
            <div className="flex items-start px-4">
              <div className="w-full">
                <h2>
                  {skeleton({
                    widthCls: 'w-32',
                    heightCls: 'h-8',
                    className: 'mb-2 mx-auto',
                  })}
                </h2>
                <div className="avatar w-full h-full">
                  <div className="w-full h-48 mask mask-square mx-auto">
                    {skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  </div>
                </div>
                <div className="mt-2">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-4',
                    className: 'mx-auto',
                  })}
                </div>
                <div className="mt-2 flex items-center flex-wrap justify-center">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-4',
                    className: 'mx-auto',
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-2">
            {skeleton({
              widthCls: 'w-8',
              heightCls: 'h-8',
              shape: 'rounded-full',
            })}
            {skeleton({
              widthCls: 'w-8',
              heightCls: 'h-8',
              shape: 'rounded-full',
            })}
          </div>
        </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div
        className="card shadow-md card-sm bg-base-100"
        key={index}
      >
        <div className="p-8 h-full w-full flex flex-col">
          <div className="flex-1">
            <div className="px-4">
              <div className="text-center w-full">
                <h2 className="font-medium text-center opacity-60 mb-2 text-lg font-bold">
                  {item.title}
                </h2>
                {item.imageUrl && (
                  <div className="avatar opacity-90 w-full">
                    <div className="w-full h-48 mask mask-square">
                      <LazyImage
                        src={item.imageUrl}
                        alt={'thumbnail'}
                        placeholder={skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      />
                    </div>
                  </div>
                )}
                <p className="mt-2 text-base-content text-sm text-justify">
                  {item.description}
                </p>
              </div>
              <div className="mt-2 flex items-center flex-wrap justify-center">
                {item.tech?.map((tech, index) => (
                  <div key={index} className="badge badge-primary badge-sm mr-2 mt-2">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-2">
            {item.link && (
              <button
                className="btn btn-circle btn-sm btn-primary"
                onClick={() => {
                  try {
                    if (googleAnalyticId) {
                      ga.event('Click External Project Link', {
                        post: item.title,
                      });
                    }
                  } catch (error) {
                    console.error(error);
                  }
                  window?.open(item.link, '_blank');
                }}
                title="Visit Project"
              >
                <MdLanguage className="text-lg" />
              </button>
            )}
            {item.githubUrl && (
              <button
                className="btn btn-circle btn-sm btn-secondary"
                onClick={() => {
                  try {
                    if (googleAnalyticId) {
                      ga.event('Click External Project GitHub', {
                        post: item.title,
                      });
                    }
                  } catch (error) {
                    console.error(error);
                  }
                  window?.open(item.githubUrl, '_blank');
                }}
                title="View on GitHub"
              >
                <FaGithub className="text-lg" />
              </button>
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <MdOpenInNew className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${externalProjects.length} projects`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
